const DomParser = require("../index.js")

const page= `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test Page</title>
</head>
<body>
    <h1>Hello World</h1>
    <p>Test Paragraph</p>
    <span id="spanid">Span field</span>
</body>
</html>`

const document = new DomParser(page, "text/html")

function assert(state){
    return state ? "✅" : "❌ "
}

console.log(assert(document),"Dom Parsed")