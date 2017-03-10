/* eslint-disable react/jsx-filename-extension */
import path from 'path';
import fs from 'fs';
import fetch from 'isomorphic-fetch';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../common/App';

const appDiv = /<div id="?app"?><\/div>/;
const appDivTemplate = '<div id="app">{{rendered}}</div>\n{{initialState}}';

// Read in index.html from the filesystem (or client development server) and
// return a template which can be used to inject the rendered React app.
const fetchHtmlTemplate = (() => {
  if (process.env.NODE_ENV === 'development') {
    return () => fetch('http://localhost:8080/index.html')
      .then(res => res.text())
      .then(res => res.replace(appDiv, appDivTemplate))
      .catch(() => 'Client development server not running');
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
  // const store = createStore ...

  const html = renderToString(
    <App />,
  );

  // const preloadedState = store.getState() ...

  const renderedPage = await renderFullPage(html, null);
  res.send(renderedPage);
};
