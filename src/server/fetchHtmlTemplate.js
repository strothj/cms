import path from 'path';
import fs from 'fs';
import http from 'http';

const appDiv = /<div id="?app"?><\/div>/;
const appDivTemplate = '<div id="app">{{rendered}}</div>{{initialState}}';

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

export default fetchHtmlTemplate;
