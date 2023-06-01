import {HTMLElement} from './element';

/**
 * @implements globalThis.HTMLTableRowElement
 */
export class HTMLTableRowElement extends HTMLElement {
  constructor(ownerDocument, localName = 'tr') {
    super(ownerDocument, localName);
  }
}
