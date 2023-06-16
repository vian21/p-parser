const {DOMParser} = require('./linkedom/cjs/index.js')

/**
 * HTML DOM parser
 */
class HTML{
    /**
     * 
     * @param {markupLanguage} data 
     * @returns HTMLDocument object
     */
    static parse(data){
        return (new DOMParser()).parseFromString(data, 'text/html')
    }
}

/**
 * XML DOM parser
 */
class XML{
    /**
     * 
     * @param {markupLanguage} data 
     * @returns XMLDocument object
     */
    static parse(data){
        return (new DOMParser()).parseFromString(data, 'text/xml')
    }
}

module.exports = {
    HTML,
    XML
}
