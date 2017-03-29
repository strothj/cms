const router = require('express').Router();
const jsonServer = require('json-server');

const db = {
  meta: {
    siteTitle: 'ncms',
    tagline: 'A content management system made using Next.js',
  },
  theme: {
    fonts: [
      { id: 0, name: 'Roboto' },
      { id: 1, name: 'Quicksand' },
    ],
    headerImage: '/static/images/header-image.jpg',
    headerFont: 'Quicksand',
    headerColor: '#fff',
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
