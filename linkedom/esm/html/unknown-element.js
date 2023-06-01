import {HTMLElement} from './element';

/**
 * @implements globalThis.HTMLUnknownElement
 */
export class HTMLUnknownElement extends HTMLElement {
  constructor(ownerDocument, localName = 'unknown') {
    super(ownerDocument, localName);
  }
}
