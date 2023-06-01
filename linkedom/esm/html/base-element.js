import {HTMLElement} from './element';

/**
 * @implements globalThis.HTMLBaseElement
 */
export class HTMLBaseElement extends HTMLElement {
  constructor(ownerDocument, localName = 'base') {
    super(ownerDocument, localName);
  }
}
