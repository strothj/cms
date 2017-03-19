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
    it('returns error if first user is not admin', () => {
      const u = userParam({ role: 'editor' });
      return expect(UserService.createUser(null, { user: u }))
        .to.be.rejectedWith(UserService.SetupError);
    });
  });
});
