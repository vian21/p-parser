import { DOMParser } from "./linkedom/esm/index.js"

export default class DomParser{
    constructor(data, mimeType = "text/html"){
        return (new DOMParser()).parseFromString(data, mimeType)
        
    }
}