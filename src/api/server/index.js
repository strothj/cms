const router = require('express').Router();
const jsonServer = require('json-server');

const db = {
  userinfo: {
    username: 'admin',
  },
};
const jsonRouter = jsonServer.router(db);
const middlewares = jsonServer.defaults();

module.exports.prepare = () => {
  router.use(middlewares);
  router.use(jsonRouter);
  return Promise.resolve();
};

module.exports.getRouter = () => router;
