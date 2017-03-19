import faker from 'faker';

export default params => ({
  provider: 'local',
  username: faker.internet.userName(),
  displayName: `${faker.name.firstName()} ${faker.name.lastName()}`,
  name: {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  },
  email: faker.internet.email(),
  role: faker.random.arrayElement(['admin', 'editor', 'subscriber']),
  password: faker.random.alphaNumeric(60),
  ...params,
});
