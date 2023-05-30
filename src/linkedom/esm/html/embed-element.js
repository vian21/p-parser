import {HTMLElement} from './element';

/**
 * @implements globalThis.HTMLEmbedElement
 */
export class HTMLEmbedElement extends HTMLElement {
  constructor(ownerDocument, localName = 'embed') {
    super(ownerDocument, localName);
  }
}
