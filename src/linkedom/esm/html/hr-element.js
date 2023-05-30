import {HTMLElement} from './element';

/**
 * @implements globalThis.HTMLHRElement
 */
export class HTMLHRElement extends HTMLElement {
  constructor(ownerDocument, localName = 'hr') {
    super(ownerDocument, localName);
  }
}
