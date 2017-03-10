/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

const el = document.getElementById('app');

const render = async (AppFactory) => {
  const app = await AppFactory();
  ReactDOM.render(
    <AppContainer>
      {app}
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
  module.hot.accept('./App', () => { render(App); });
}
