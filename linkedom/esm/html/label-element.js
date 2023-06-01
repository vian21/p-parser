import {HTMLElement} from './element';

/**
 * @implements globalThis.HTMLLabelElement
 */
export class HTMLLabelElement extends HTMLElement {
  constructor(ownerDocument, localName = 'label') {
    super(ownerDocument, localName);
  }
}
