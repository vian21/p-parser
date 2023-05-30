import {HTMLElement} from './element';

/**
 * @implements globalThis.HTMLTimeElement
 */
export class HTMLTimeElement extends HTMLElement {
  constructor(ownerDocument, localName = 'time') {
    super(ownerDocument, localName);
  }
}
