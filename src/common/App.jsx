import React from 'react';
import {
  Route,
} from 'react-router-dom';
import Dashboard from './dashboard';
import Setup from './setup';
import Site from './site';

const App = ({ siteMeta }) => {
  let app;
  if (!siteMeta) {
    app = <div />;
  } else if (siteMeta.setupRequired) {
    app = <Setup />;
  } else {
    app = (
      <div>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" component={Site} />
      </div>
    );
  }
  return app;
};

export default App;
