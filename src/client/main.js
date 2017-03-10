/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from '../common/App';

const el = document.getElementById('app');

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    el,
  );
};

document.addEventListener('DOMContentLoaded', () => {
  render(App);
});

// Respond to code changes when hot module replacement is enabled.
// module.hot is injected when in development mode.
if (module.hot) {
  module.hot.accept('../common/App', () => { render(App); });
}
