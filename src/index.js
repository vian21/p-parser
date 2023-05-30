import {DOMParser} from './linkedom/esm';

const html = `<html>
  <head>
    <title>Sample HTML</title>
  </head>
  <body>
    <h1>Sample HTML</h1>
    <p>This is a sample HTML document.</p>
  </body>
</html>`;

const document = (new DOMParser).parseFromString(html, 'text/html');
console.log(document)
