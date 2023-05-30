import {HTMLElement} from './element';

/**
 * @implements globalThis.HTMLBodyElement
 */
export class HTMLBodyElement extends HTMLElement {
  constructor(ownerDocument, localName = 'body') {
    super(ownerDocument, localName);
  }
}
