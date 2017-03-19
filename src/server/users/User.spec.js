import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { dbConnect } from '../core';
import userParam from './test-fixtures/userParam.spec';
import User from './User';

chai.use(chaiAsPromised);

describe('User model', () => {
  before(() => dbConnect('testing'));
  beforeEach(() => User.remove());

  it('creates user', () => {
    const user = new User(userParam());
    return user.save()
      .then(() => expect(User.findOne()).to.eventually.exist);
  });

  it('returns error when "provider" is not equal to "local"', () => {
    const user = new User({ provider: 'google' });
    return expect(user.save()).to.be.rejected;
  });

  it('expected fields returned when converted to JSON', () => {
    const expectedFields = [
      'displayName',
      'email',
      'id',
      'name',
      'provider',
      'role',
      'username',
    ];
    const user = new User(userParam());
    return user.save()
      .then(u => u.toJSON())
      .then(u => expect(Object.keys(u)).to.have.members(expectedFields));
  });

  it('it returns error if only one of the "name" fields are provided', () => {
    let tests = [
      ['rejected', { name: { lastName: 'Anderson' } }],
      ['rejected', { name: { firstName: 'Bob' } }],
      ['fulfilled', { name: undefined }],
      ['fulfilled', { name: { firstName: 'Bob', lastName: 'Anderson' } }],
    ];
    tests = tests.map(t => expect((() => {
      const user = new User(userParam(t[1] /* { name: ... } */));
      return user.save();
    })()).to.be[t[0]] /* rejected/fulfilled */);
    return Promise.all(tests);
  });

  it('email address is lowercased', () => {
    const user = new User(userParam({ email: 'Bob@example.com' }));
    return user.save()
      .then(User.findOne())
      .then(u => expect(u.email).to.equal('bob@example.com'));
  });

  it('returns error when attempting to use an existing username', () => {
    const user1 = userParam({ username: 'Anderson' });
    const user2 = userParam({ username: 'Anderson' });
    return expect(
      User.create(user1)
        .then(() => User.create(user2)),
      ).to.be.rejected;
  });

  it('returns error when attempting to use an existing email address', () => {
    const user1 = userParam({ email: 'bob@example.com' });
    const user2 = userParam({ email: 'bob@example.com' });
    return expect(
      User.create(user1)
        .then(() => User.create(user2)),
      ).to.be.rejected;
  });
});
