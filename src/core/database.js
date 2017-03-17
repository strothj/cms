import mongoose from 'mongoose';
import config from './config';

mongoose.Promise = Promise;
let initialized = false;

// Unclutter unit test output.
// eslint-disable-next-line no-console
const log = process.env.NODE_ENV === 'test' ? () => {} : console.log;

const dbConnect = env => new Promise((resolve, reject) => {
  if (initialized) {
    resolve();
    return;
  }

  let connectionString;
  switch (env) {
    case 'production':
      connectionString = config.NODE_CMS_DB_CONNECTION_STRING;
      log('Connecting to production database.'); // eslint-disable-line no-console
      break;
    case 'testing':
      connectionString = config.NODE_CMS_TEST_DB_CONNECTION_STRING;
      log('Connecting to testing database.'); // eslint-disable-line no-console
      break;
    default: reject(new Error('database: env must be "production" or "testing"')); return;
  }
  if (!connectionString) {
    reject(new Error('database: empty connection string was supplied'));
    return;
  }

  mongoose.connect(connectionString)
    .then(() => {
      initialized = true;
      log('Database connection established.'); // eslint-disable-line no-console
      resolve();
    })
    .catch(reject);
});

export default dbConnect;
