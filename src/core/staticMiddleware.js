import path from 'path';
import http from 'http';
import express from 'express';

// Serve static assets from filesystem. Proxy static asset requests to
// development server when not running in production.
export default () => {
  if (process.env.NODE_ENV === 'development') {
    return (req, res, next) => { // eslint-disable-line no-unused-vars
      const preq = http.get(`http://localhost:8080/static${req.url}`, (pres) => {
        let data = '';
        const contentType = pres.headers['content-type'];
        pres.on('data', (chunk) => { data += chunk; });
        pres.on('end', () => {
          res.setHeader('content-type', contentType);
          res.send(data);
        });
      });
      preq.on('error', (e) => {
        res.status(500).send(e.toString());
      });
    };
  }

  return express.static(path.resolve(__dirname, 'public/static'));
};
