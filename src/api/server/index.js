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
    contentTitleColor: '#222',
    contentBackgroundColor: '#fff',
  },
  posts: [
    {
      id: '1',
      title: 'Aliquip commodo laboris elit',
      permalink: 'aliquip-commodo',
      featuredImage: 'https://placekitten.com/250/350',
      content: `# Sunt Lorem ea do proident adipisicing mollit incididunt exercitation nisi officia in.

      Tempor cupidatat eiusmod amet consequat do officia consectetur qui aliquip. Culpa aliquip velit magna officia amet labore. Amet culpa do aute adipisicing cupidatat elit irure.
      `,
    },
  ],
};
const jsonRouter = jsonServer.router(db);
const middlewares = jsonServer.defaults();

module.exports.prepare = () => {
  router.use(middlewares);
  router.use(jsonRouter);
  return Promise.resolve();
};

module.exports.getRouter = () => router;
