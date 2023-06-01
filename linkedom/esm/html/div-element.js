import {HTMLElement} from './element';

/**
 * @implements globalThis.HTMLDivElement
 */
export class HTMLDivElement extends HTMLElement {
  constructor(ownerDocument, localName = 'div') {
    super(ownerDocument, localName);
  }
}
