/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from '../common/store';
import App from '../common/App';
import fetchHtmlTemplate from './fetchHtmlTemplate';
import fetchSiteMetaInfo from './fetchSiteMetaInfo';

// Replace template placeholders with rendered React app.
const renderFullPage = async (html, preloadedState) => { // eslint-disable-line no-unused-vars
  let rendered = await fetchHtmlTemplate();
  rendered = rendered.replace('{{rendered}}', html);
  rendered = rendered.replace(
    '{{initialState}}',
    `<script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')};</script>`,
  );
  return Promise.resolve(rendered);
};

export default async (req, res) => {
  const siteMeta = await fetchSiteMetaInfo();
  const store = createStore({ siteMeta });
  const context = {};

  const html = renderToString(
    <Provider store={store}>
      <Router location={req.url} context={context}>
        <App />
      </Router>
    </Provider>,
  );

  const finalState = store.getState();

  const renderedPage = await renderFullPage(html, finalState);
  res.status(200).send(renderedPage);
};
