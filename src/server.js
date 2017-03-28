const express = require('express');
const next = require('next');
const apiServer = require('./api/server');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev });
const handler = app.getRequestHandler(app);

apiServer.prepare()
.then(() => app.prepare())
.then(() => {
  const server = express();

  server.use('/api', apiServer.getRouter());
  server.get('*', (req, res) => handler(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Listening on port ${port}`); // eslint-disable-line no-console
  });
});
