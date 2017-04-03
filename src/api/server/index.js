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
      title: 'twitch split',
      permalink: 'twitch-split',
      featuredImage: 'https://raw.githubusercontent.com/strothj/twitch-split/master/screenshots/twitch-split-0.png',
      content: `# twitch split
Thinkful ([https://www.thinkful.com](https://www.thinkful.com))
end of unit portfolio project - a multi-stream viewer for the [Twitch.tv](https://twitch.tv) service with sharable links.

![Instant Search](https://raw.githubusercontent.com/strothj/twitch-split/master/screenshots/twitch-split-1.png)
![Split Stream View](https://raw.githubusercontent.com/strothj/twitch-split/master/screenshots/twitch-split-2.png)

## Summary
twitch split makes it easy to experience a match between opponents by offering
an instant search feature and split video view.
Search for your favorite streamer by typing the name of the game being played or
their streamer tag.
Switch between chats using the convenient chat switcher.
When you've found the perfect split view, send the url to friends so they can
share in the experience.

## Live Site
You can access twitch split at [https://strothj.github.io/twitch-split](https://strothj.github.io/twitch-split).

## Technologies Used
* HTML5
* CSS (SASS)
* ES6+ (Babel, Webpack)
* React (Redux)`,
    },
    {
      id: '2',
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
      { id: '1', pretext: 'someUser on', title: 'Lorem ipsum dolor sit amet', href: '/2017/04/01/lorem-ipsum-dolor-sit-amet/#comment-2' },
      { id: '2', pretext: 'Another Dude on', title: 'Lorem ipsum dolor sit amet', href: '/2017/04/01/lorem-ipsum-dolor-sit-amet/#comment-1' },
      { id: '3', pretext: 'someUser on', title: 'adipisicing elit. Consequuntur, in!', href: '/2017/04/01/adipisicing-elit-consequuntur-in/#comment-1' },
    ],
    archives: [
      { id: '1', title: 'March 2017', href: '/2017/04/' },
    ],
    categories: [
      { id: '1', title: 'Cool stuff', href: '/category/cool-stuff/' },
      { id: '2', title: 'Uncategorized', href: '/category/uncategorized/' },
    ],
    links: [
      { id: '1', title: 'Log in', href: '/login' },
      { id: '2', title: 'Github Page', href: 'https://github.com/strothj/ncms' },
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
