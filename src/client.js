/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer as HotReloadContainer } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { createStore } from './store';

/* eslint-disable no-underscore-dangle */
const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
const store = createStore(preloadedState);

const el = document.getElementById('app');

const render = (Component) => {
  ReactDOM.render(
    <HotReloadContainer>
      <Provider store={store}>
        <Router>
          <Component />
        </Router>
      </Provider>
    </HotReloadContainer>,
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
