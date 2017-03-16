import dotenv from 'dotenv';

const millisecondsPerHour = 3600000;
const millisecondsPerDay = 24 * millisecondsPerHour;

const defaultConfig = {
  NODE_CMS_SESSION_COOKIE_DOMAIN: null,
  NODE_CMS_SESSION_COOKIE_HTTP_ONLY: true,
  NODE_CMS_SESSION_COOKIE_MAX_AGE: 7 * millisecondsPerDay,
  NODE_CMS_SESSION_COOKIE_PATH: '/',
  NODE_CMS_SESSION_COOKIE_SAME_SITE: 'lax',
  NODE_CMS_SESSION_COOKIE_SECURE: true,
};

const loadedConfig = dotenv.load().parsed;

const config = Object.assign({}, defaultConfig, loadedConfig);

export default config;
