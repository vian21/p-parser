import {HTMLElement} from './element';

/**
 * @implements globalThis.HTMLPreElement
 */
export class HTMLPreElement extends HTMLElement {
  constructor(ownerDocument, localName = 'pre') {
    super(ownerDocument, localName);
  }
}
