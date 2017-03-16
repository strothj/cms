import express from 'express';
import swaggerMiddleware from './swaggerMiddleware';
import staticMiddleware from './staticMiddleware';
import renderPage from './renderPage';
// import config from './config';

const app = express();

swaggerMiddleware(app)
  .then(() => app.use('/static', staticMiddleware()))
  .then(() => app.get('*', renderPage));

export default app;
