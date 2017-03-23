/* eslint-disable no-underscore-dangle */
import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { dbConnect } from '../core';
import User from './User';
import userParam from './test-fixtures/userParam.spec';
import * as UserService from './UserService';

chai.use(chaiAsPromised);

describe('User service', () => {
  before(() => dbConnect());
  beforeEach(() => User.remove());

  describe('create', () => {
    const create = (authenticatedUser, newUserParam) => (
      UserService.create(authenticatedUser, { user: newUserParam })
    );

    describe('while server not setup', () => {
      it('returns error if first user is not admin', () => {
        const createEditor = create(null, userParam({ role: 'editor' }));
        const createSubscriber = create(null, userParam({ role: 'subscriber' }));

        return Promise.all([
          expect(createEditor).to.be.rejectedWith(UserService.SetupError),
          expect(createSubscriber).to.be.rejectedWith(UserService.SetupError),
        ]);
      });

      it('adds admin user in setup mode', () => {
        const createAdmin = create(null, userParam({ role: 'admin' }));
        const adminInDB = createAdmin.then(() => User.findOne());

        return expect(adminInDB).to.eventually.exist;
      });
    });

    describe('after server is setup', () => {
      // Add an admin account so server is no longer in setup mode.
      beforeEach(() => create(null, userParam({ role: 'admin' })));

      it('creating admin/editor user while unauthenticated returns error', () => {
        const createAdmin = create(null, userParam({ role: 'admin' }));
        const createEditor = create(null, userParam({ role: 'editor' }));

        return Promise.all([
          expect(createAdmin).to.be.rejectedWith(UserService.PrivilegeError),
          expect(createEditor).to.be.rejectedWith(UserService.PrivilegeError),
        ]);
      });

      it('allows creation of subscriber accounts without an authenticated account', () => {
        const createSubscriber = create(null, userParam({ role: 'subscriber' }));
        return expect(createSubscriber).to.eventually.exist;
      });

      it('creates admin/editor user if authenticated as an admin user', () => {
        const credential = userParam({ role: 'admin' });
        const createAdmin = create(credential, userParam({ role: 'admin' }));
        const createEditor = create(credential, userParam({ role: 'editor' }));

        return Promise.all([
          expect(createAdmin).to.eventually.exist,
          expect(createEditor).to.eventually.exist,
        ]);
      });
    });
  });

  describe('findOne', () => {
    it('returns existing user', () => {
      const createdUser = User.create(userParam());
      const foundUser = createdUser.then(u => UserService.findOne(null, { id: u._id }));

      return expect(foundUser).to.eventually.exist;
    });

    it('returns null if user doesn\'t exist', () => {
      const nonexistantUser = UserService.findOne(null, { id: 'a'.repeat(24) });

      return expect(nonexistantUser).to.eventually.equal(null);
    });
  });

  describe('find', () => {
    // Swagger will insert default values for "page" and "per_page" so provide
    // defaults here.
    const find = (authenticatedUser, args) => (
      UserService.find(authenticatedUser, {
        page: 0,
        per_page: 5,
        ...args,
      })
    );
    const adminUser = userParam({ role: 'admin' });
    let expectedUsers;

    // Insert 30 users into the database and store user JSON into "expectedUsers".
    beforeEach(() => {
      const createExpectedUsers = (() => {
        const promises = [];
        for (let i = 0; i < 30; i += 1) promises.push(User.create(userParam()));
        return Promise.all(promises);
      })();
      const getUsersInDBOrder = () => User.find();
      const convertUsersToJSON = users => users.map(u => u.toJSON());
      const storeExpectedUsers = (users) => { expectedUsers = users; };
      return createExpectedUsers
        .then(getUsersInDBOrder)
        .then(convertUsersToJSON)
        .then(storeExpectedUsers);
    });

    it('returns error is user is not admin', () => {
      const findAsSubscriber = find(userParam({ role: 'subscriber' }));
      const findAsEditor = find(userParam({ role: 'editor' }));

      return Promise.all([
        expect(findAsSubscriber).to.be.rejectedWith(UserService.PrivilegeError),
        expect(findAsEditor).to.be.rejectedWith(UserService.PrivilegeError),
      ]);
    });

    it('default values return first page', () => {
      const findWithDefaults = find(adminUser).then(
        results => ({
          totalUsers: results.totalUsers,
          users: results.users.map(u => u.toJSON()),
        }),
      );
      const firstFiveUsers = expectedUsers.slice(0, 5);

      return expect(findWithDefaults).to.eventually.deep.equal({
        totalUsers: 30,
        users: firstFiveUsers,
      });
    });

    it('returns requested page', () => {
      const findPage2Results = find(adminUser, {
        page: 1,
        per_page: 20,
      }).then(
        results => ({
          totalUsers: results.totalUsers,
          users: results.users.map(u => u.toJSON()),
        }),
      );
      const last10Users = expectedUsers.slice(20);

      return expect(findPage2Results).to.eventually.deep.equal({
        totalUsers: 30,
        users: last10Users,
      });
    });
  });
});
