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
    <p>Hello World</p>
    <p>Test Paragraph</p>
    <span id="spanid">Span field</span>
</body>
</html>`

const document = new DomParser(page, "text/html")

function assert(state){
    return state ? "✅" : "❌ "
}

console.log(assert(document),"Dom Parsed")
console.log(assert(document.body),"Body Parsed")
console.log(assert(document.getElementById("spanid")),"Test getElementById()")
console.log(assert(document.querySelector("#spanid")),"Test querySelector()")
console.log(assert(document.querySelectorAll("span").length === 1),"Test querySelectorAll() on unique element")
console.log(assert(document.querySelectorAll("p")[0].textContent === "Hello World"),"Test querySelectorAll() on multiple elements")