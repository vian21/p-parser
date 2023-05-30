import {HTMLElement} from './element';

/**
 * @implements globalThis.HTMLOptGroupElement
 */
export class HTMLOptGroupElement extends HTMLElement {
  constructor(ownerDocument, localName = 'optgroup') {
    super(ownerDocument, localName);
  }
}
