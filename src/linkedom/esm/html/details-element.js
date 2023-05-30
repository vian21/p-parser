import {HTMLElement} from './element';

/**
 * @implements globalThis.HTMLDetailsElement
 */
export class HTMLDetailsElement extends HTMLElement {
  constructor(ownerDocument, localName = 'details') {
    super(ownerDocument, localName);
  }
}
