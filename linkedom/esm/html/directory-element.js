import {HTMLElement} from './element';

/**
 * @implements globalThis.HTMLDirectoryElement
 */
export class HTMLDirectoryElement extends HTMLElement {
  constructor(ownerDocument, localName = 'dir') {
    super(ownerDocument, localName);
  }
}
