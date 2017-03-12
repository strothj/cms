/* eslint-disable react/jsx-filename-extension */
import path from 'path';
import fs from 'fs';
import http from 'http';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from '../common/store';
import App from '../common/App';

const appDiv = /<div id="?app"?><\/div>/;
const appDivTemplate = '<div id="app">{{rendered}}</div>\n{{initialState}}';

// Read in index.html from the filesystem (or client development server) and
// return a template which can be used to inject the rendered React app.
const fetchHtmlTemplate = (() => {
  if (process.env.NODE_ENV === 'development') {
    return () => new Promise((resolve) => {
      const req = http.get('http://localhost:8080', (res) => {
        let html = '';
        res.on('data', (chunk) => { html += chunk; });
        res.on('end', () => {
          html = html.replace(appDiv, appDivTemplate);
          resolve(html);
        });
      });
      req.on('error', (e) => { resolve(`Client development server not running<br>${e}`); });
    });
  }

  const html = fs.readFileSync(path.resolve(__dirname, 'public/index.html')).toString();
  const htmlTemplate = html.replace(appDiv, appDivTemplate);
  return () => Promise.resolve(htmlTemplate);
})();

// Replace template placeholders with rendered React app.
// TODO: Inject redux store.
const renderFullPage = async (html, preloadedState) => { // eslint-disable-line no-unused-vars
  let rendered = await fetchHtmlTemplate();
  rendered = rendered.replace('{{rendered}}', html);
  rendered = rendered.replace('{{initialState}}', '');
  return Promise.resolve(rendered);
};

export default async (req, res) => {
  const store = createStore();

  const context = {};
  const html = renderToString(
    <Provider store={store}>
      <Router location={req.url} context={context}>
        <App />
      </Router>
    </Provider>,
  );

  const renderedPage = await renderFullPage(html, null);
  res.status(200).send(renderedPage);
};
