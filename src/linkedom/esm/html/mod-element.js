import {HTMLElement} from './element';

/**
 * @implements globalThis.HTMLModElement
 */
export class HTMLModElement extends HTMLElement {
  constructor(ownerDocument, localName = 'mod') {
    super(ownerDocument, localName);
  }
}
