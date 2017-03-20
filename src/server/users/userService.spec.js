import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { dbConnect } from '../core';
import User from './User';
import userParam from './test-fixtures/userParam.spec';
import * as UserService from './userService';

chai.use(chaiAsPromised);

describe('User service', () => {
  before(() => dbConnect());
  beforeEach(() => User.remove());

  describe('createUser', () => {
    const createUser = (authenticatedUser, newUserParam) => (
      UserService.createUser(authenticatedUser, { user: newUserParam })
    );

    describe('while server not setup', () => {
      it('returns error if first user is not admin', () => {
        const createEditor = createUser(null, userParam({ role: 'editor' }));
        const createSubscriber = createUser(null, userParam({ role: 'subscriber' }));

        return Promise.all([
          expect(createEditor).to.be.rejectedWith(UserService.SetupError),
          expect(createSubscriber).to.be.rejectedWith(UserService.SetupError),
        ]);
      });

      it('adds admin user in setup mode', () => {
        const createAdmin = createUser(null, userParam({ role: 'admin' }));
        const adminInDB = createAdmin.then(() => User.findOne());

        return expect(adminInDB).to.eventually.exist;
      });
    });

    describe('after server is setup', () => {
      // Add an admin account so server is no longer in setup mode.
      beforeEach(() => createUser(null, userParam({ role: 'admin' })));

      it('creating admin/editor user while unauthenticated returns error', () => {
        const createAdmin = createUser(null, userParam({ role: 'admin' }));
        const createEditor = createUser(null, userParam({ role: 'editor' }));

        return Promise.all([
          expect(createAdmin).to.be.rejectedWith(UserService.PrivilegeError),
          expect(createEditor).to.be.rejectedWith(UserService.PrivilegeError),
        ]);
      });

      it('allows creation of subscriber accounts without an authenticated account', () => {
        const createSubscriber = createUser(null, userParam({ role: 'subscriber' }));
        return expect(createSubscriber).to.eventually.exist;
      });

      it('creates admin/editor user if authenticated as an admin user', () => {
        const credential = userParam({ role: 'admin' });
        const createAdmin = createUser(credential, userParam({ role: 'admin' }));
        const createEditor = createUser(credential, userParam({ role: 'editor' }));

        return Promise.all([
          expect(createAdmin).to.eventually.exist,
          expect(createEditor).to.eventually.exist,
        ]);
      });
    });
  });
});
