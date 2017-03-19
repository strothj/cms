import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';

import { dbConnect } from '../core';
import User from './user.model';
import { user } from './user.model.spec';
import * as UserService from './user.service';

chai.use(chaiAsPromised);

describe('User service', () => {
  before(() => dbConnect());
  beforeEach(() => User.remove());

  describe('createUser', () => {
    it('returns error if first user is not admin', () => {
      const u = user({ role: 'editor' });
      return expect(UserService.createUser(null, { user: u }))
        .to.be.rejectedWith(UserService.SetupError);
    });
  });
});
