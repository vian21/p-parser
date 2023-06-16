# p-parser

A HTML/XML parser based on [Linkedom](https://github.com/WebReflection/linkedom)

## Install

```sh
npm install p-parser
```
## Usage
```js
import { HTML, XML } from "p-parser"; 
// const { HTML, XML} = require("p-parser")

const page = `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Test Page</title>
</head>
<body>
    <p>Hello World</p>
    <p>Test Paragraph</p>
    <span id="spanid">Span field</span>
</body>
</html>`;

const document = HTML.parse(page);

console.log(document.getElementById("spanid"));
//or
console.log(document.querySelector("#spanid"));

// XML
const XMLDocument = XML.parse(`
<?xml version="1.0" encoding="ISO-8859-1"?>
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note>
`)
//... now you can traverse the XMLDocument
```
## Why
- p-parser is made to allow DOM traversal and parsing of Markup documents in the `browser` or `node` environment.
- It is based on linkedom - a fast linked list document parser.
- It was tailored to be used in a chrome extension environment which no longer provides a DOM Parsing API
