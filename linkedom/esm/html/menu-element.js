import {HTMLElement} from './element';

/**
 * @implements globalThis.HTMLMenuElement
 */
export class HTMLMenuElement extends HTMLElement {
  constructor(ownerDocument, localName = 'menu') {
    super(ownerDocument, localName);
  }
}
