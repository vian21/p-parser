import {HTMLElement} from './element';

/**
 * @implements globalThis.HTMLParagraphElement
 */
export class HTMLParagraphElement extends HTMLElement {
  constructor(ownerDocument, localName = 'p') {
    super(ownerDocument, localName);
  }
}
