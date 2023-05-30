import {HTMLElement} from './element';

/**
 * @implements globalThis.HTMLDataListElement
 */
export class HTMLDataListElement extends HTMLElement {
  constructor(ownerDocument, localName = 'datalist') {
    super(ownerDocument, localName);
  }
}
