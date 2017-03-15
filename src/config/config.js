const millisecondsPerHour = 3600000;
const millisecondsPerDay = 24 * millisecondsPerHour;

const config = {
  NODE_CMS_SESSION_COOKIE_PATH: '/',
  NODE_CMS_SESSION_COOKIE_HTTP_ONLY: true,
  NODE_CMS_SESSION_COOKIE_SECURE: true,
  NODE_CMS_SESSION_COOKIE_MAX_AGE: 7 * millisecondsPerDay,
};

export default config;
