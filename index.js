const {DOMParser} = require("./linkedom/cjs/index.js")

class DomParser{
    constructor(data, mimeType = "text/html"){
        return (new DOMParser()).parseFromString(data, mimeType)
        
    }
}

module.exports = DomParser