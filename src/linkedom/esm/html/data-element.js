import {HTMLElement} from './element';

/**
 * @implements globalThis.HTMLDataElement
 */
export class HTMLDataElement extends HTMLElement {
  constructor(ownerDocument, localName = 'data') {
    super(ownerDocument, localName);
  }
}
