import {HTMLElement} from './element';

/**
 * @implements globalThis.HTMLOutputElement
 */
export class HTMLOutputElement extends HTMLElement {
  constructor(ownerDocument, localName = 'output') {
    super(ownerDocument, localName);
  }
}
