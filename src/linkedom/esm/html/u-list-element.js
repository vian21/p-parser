import {HTMLElement} from './element';

/**
 * @implements globalThis.HTMLUListElement
 */
export class HTMLUListElement extends HTMLElement {
  constructor(ownerDocument, localName = 'ul') {
    super(ownerDocument, localName);
  }
}
