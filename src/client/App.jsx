import React from 'react';
import { browserHistory, match, Router } from 'react-router';
import routes from '../common/routes';

const App = () => new Promise((resolve) => {
  match({ history: browserHistory, routes }, (error, redirectLocation, renderProps) => {
    resolve(<Router {...renderProps} />);
  });
});

export default App;
