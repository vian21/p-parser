import {HTMLElement} from './element';

/**
 * @implements globalThis.HTMLHtmlElement
 */
export class HTMLHtmlElement extends HTMLElement {
  constructor(ownerDocument, localName = 'html') {
    super(ownerDocument, localName);
  }
}
