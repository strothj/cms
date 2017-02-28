import http from 'http';
import app from './app';

const server = http.createServer(app);
let currentApp = app;
server.listen(3000);

// Respond to code changes when hot module replacement is enabled.
// module.hot is injected when in development mode.
if (module.hot) {
  module.hot.accept('./app', () => {
    server.removeListener('request', currentApp);
    server.on('request', app);
    currentApp = app;
  });
}
