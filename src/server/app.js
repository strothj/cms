import express from 'express';
import cors from 'cors';
import swaggerTools from 'swagger-tools';
import swaggerDoc from './api/swagger.yaml';

// swaggerRouter configuration
const swaggerOptions = {
  apiDocs: `${swaggerDoc.basePath}/api-docs`,
  swaggerUi: `${swaggerDoc.basePath}/docs`,
  useStubs: process.env.NODE_ENV === 'development', // Turn on stubs (mock mode)
};

const app = express();

// Enable CORS requests during development to allow calls from Swagger
// swagger documention.
if (process.env.NODE_ENV === 'development') app.use(swaggerDoc.basePath, cors());

swaggerTools.initializeMiddleware(swaggerDoc, (middleware) => {
  app.use(middleware.swaggerMetadata());
  // TODO: Add middleware.swaggerSecurity here
  app.use(middleware.swaggerValidator());
  app.use(middleware.swaggerRouter(swaggerOptions));
  app.use(middleware.swaggerUi(swaggerOptions));
});

export default app;
