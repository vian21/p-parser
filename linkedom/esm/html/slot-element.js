import {HTMLElement} from './element';

/**
 * @implements globalThis.HTMLSlotElement
 */
export class HTMLSlotElement extends HTMLElement {
  constructor(ownerDocument, localName = 'slot') {
    super(ownerDocument, localName);
  }
}
