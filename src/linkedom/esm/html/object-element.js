import {HTMLElement} from './element';

/**
 * @implements globalThis.HTMLObjectElement
 */
export class HTMLObjectElement extends HTMLElement {
  constructor(ownerDocument, localName = 'object') {
    super(ownerDocument, localName);
  }
}
