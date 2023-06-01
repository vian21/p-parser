import {HTMLElement} from './element';

/**
 * @implements globalThis.HTMLQuoteElement
 */
export class HTMLQuoteElement extends HTMLElement {
  constructor(ownerDocument, localName = 'quote') {
    super(ownerDocument, localName);
  }
}
