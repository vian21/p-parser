import {HTMLElement} from './element';

/**
 * @implements globalThis.HTMLFrameElement
 */
export class HTMLFrameElement extends HTMLElement {
  constructor(ownerDocument, localName = 'frame') {
    super(ownerDocument, localName);
  }
}
