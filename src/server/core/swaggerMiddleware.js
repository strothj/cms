import cors from 'cors';
import swaggerTools from 'swagger-tools';
import swaggerDoc from '../api/swagger.yaml';
import controllers from './controllers';

// swaggerRouter configuration
const swaggerOptions = {
  apiDocs: `${swaggerDoc.basePath}/api-docs`,
  swaggerUi: `${swaggerDoc.basePath}/docs`,
  controllers,

  // Turn on stubs (mock mode) for paths that don't have controllers implemented
  // yet during development.
  useStubs: process.env.NODE_ENV === 'development',
};

export default app => new Promise((resolve) => {
  // Enable CORS requests during development to allow calls from Swagger
  // documention.
  if (process.env.NODE_ENV === 'development') app.use(swaggerDoc.basePath, cors());

  swaggerTools.initializeMiddleware(swaggerDoc, (middleware) => {
    app.use(middleware.swaggerMetadata());
    // TODO: Add middleware.swaggerSecurity here
    app.use(middleware.swaggerValidator());
    app.use(middleware.swaggerRouter(swaggerOptions));
    app.use(middleware.swaggerUi(swaggerOptions));
    resolve();
  });
});
