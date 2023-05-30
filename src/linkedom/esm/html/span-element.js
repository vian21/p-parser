import {HTMLElement} from './element';

/**
 * @implements globalThis.HTMLSpanElement
 */
export class HTMLSpanElement extends HTMLElement {
  constructor(ownerDocument, localName = 'span') {
    super(ownerDocument, localName);
  }
}
