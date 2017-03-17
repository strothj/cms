import { expect } from 'chai';
import { dbConnect } from '../core';
import User from './user.model';

const user = params => ({
  provider: 'local',
  username: 'awesomeUser',
  displayName: 'awesomeUser',
  name: {
    firstName: 'Bob',
    lastName: 'Anderson',
  },
  email: 'bob@example.com',
  role: 'admin',
  password: 'a'.repeat(60),
  ...params,
});

describe('User model', () => {
  before(() => dbConnect('testing'));

  beforeEach(() => User.remove());

  it('creates user', async () => {
    let u = user();
    await User.create(u);
    u = await User.findOne();
    expect(u).to.exist;
  });

  it('returns error when "provider" is not equal to "local"', async () => {
    let err;
    try {
      const u = user({ provider: 'google' });
      await User.create(u);
    } catch (e) { err = e; }
    expect(err).to.exist;
  });

  it('expected fields returned when converted to JSON', async () => {
    const expectedFields = ['id', 'provider', 'username', 'displayName', 'name', 'email', 'role'];
    let u = user();
    await User.create(u);
    u = (await User.findOne()).toJSON();
    expect(Object.keys(u)).to.have.members(expectedFields);
  });

  it('it returns error is only one of the "name" fields are provided', async () => {
    let err;
    try {
      const u = user();
      delete u.name.firstName;
      await User.create(u);
    } catch (e) { err = e; }
    expect(err).to.exist;

    err = null;
    try {
      const u = user();
      delete u.user;
      await User.create(u);
    } catch (e) { err = e; }
    expect(err).to.not.exist;
  });

  it('email address is lowercased', async () => {
    let u = user();
    u.email = 'Bob@example.com';
    await User.create(u);
    u = await User.findOne();
    expect(u.email).to.equal('bob@example.com');
  });
});
