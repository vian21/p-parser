import {HTMLElement} from './element';

/**
 * @implements globalThis.HTMLVideoElement
 */
export class HTMLVideoElement extends HTMLElement {
  constructor(ownerDocument, localName = 'video') {
    super(ownerDocument, localName);
  }
}
