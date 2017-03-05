import express from 'express';
import swaggerTools from 'swagger-tools';
import swaggerDoc from './api/swagger.yaml';

// swaggerRouter configuration
const swaggerOptions = {
  apiDocs: `${swaggerDoc.basePath}/api-docs`,
  swaggerUi: `${swaggerDoc.basePath}/docs`,
  useStubs: process.env.NODE_ENV === 'development', // Turn on stubs (mock mode)
};

const app = express();

swaggerTools.initializeMiddleware(swaggerDoc, (middleware) => {
  app.use(middleware.swaggerMetadata());
  // TODO: Add middleware.swaggerSecurity here
  app.use(middleware.swaggerValidator());
  app.use(middleware.swaggerRouter(swaggerOptions));
  app.use(middleware.swaggerUi(swaggerOptions));
});

export default app;
