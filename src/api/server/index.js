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
    contentFont: 'Quicksand',
    contentTitleColor: '#222',
    contentBackgroundColor: '#fff',
  },
  posts: [
    {
      id: '1',
      title: 'Aliquip commodo laboris elit',
      permalink: 'aliquip-commodo-laboris-elit',
      featuredImage: 'https://placekitten.com/250/350',
      content: `# Sunt Lorem ea do proident adipisicing mollit incididunt exercitation nisi officia in.

      Tempor cupidatat eiusmod amet consequat do officia consectetur qui aliquip. Culpa aliquip velit magna officia amet labore. Amet culpa do aute adipisicing cupidatat elit irure.
      `,
    },
  ],
  recent: {
    posts: [
      { id: '1', title: 'Aliquip commodo laboris elit', href: '/2017/04/01/aliquip-commodo' },
      { id: '2', title: 'Lorem ipsum dolor sit amet', href: '/2017/04/01/lorem-ipsum-dolor-sit-amet' },
      { id: '3', title: 'consectetur adipisicing elit', href: '/2017/04/01/consectetur-adipisicing-elit' },
      { id: '4', title: 'adipisicing elit. Consequuntur, in!', href: '/2017/04/01/adipisicing-elit-consequuntur-in' },
      { id: '5', title: 'elit. Sed, rerum, vel. Facilis at tenetur nobis.', href: '/2017/04/01/elit-sed-rerum-vel-facilis-at-tenetur-nobis' },
    ],
    comments: [
      { id: '2', user: 'someUser', post: 'Lorem ipsum dolor sit amet', href: '/2017/04/01/lorem-ipsum-dolor-sit-amet/#comment-2' },
      { id: '1', user: 'Another Dude', post: 'Lorem ipsum dolor sit amet', href: '/2017/04/01/lorem-ipsum-dolor-sit-amet/#comment-1' },
      { id: '3', user: 'someUser', post: 'adipisicing elit. Consequuntur, in!', href: '/2017/04/01/adipisicing-elit-consequuntur-in/#comment-1' },
    ],
    archives: [
      { id: '1', title: 'March 2017', href: '/2017/04/' },
    ],
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
