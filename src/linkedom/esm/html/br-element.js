import {HTMLElement} from './element';

/**
 * @implements globalThis.HTMLBRElement
 */
export class HTMLBRElement extends HTMLElement {
  constructor(ownerDocument, localName = 'br') {
    super(ownerDocument, localName);
  }
}
