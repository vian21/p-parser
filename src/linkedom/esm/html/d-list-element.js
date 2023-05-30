import {HTMLElement} from './element';

/**
 * @implements globalThis.HTMLDListElement
 */
export class HTMLDListElement extends HTMLElement {
  constructor(ownerDocument, localName = 'dl') {
    super(ownerDocument, localName);
  }
}
