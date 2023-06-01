import {HTMLElement} from './element';

/**
 * @implements globalThis.HTMLMediaElement
 */
export class HTMLMediaElement extends HTMLElement {
  constructor(ownerDocument, localName = 'media') {
    super(ownerDocument, localName);
  }
}
