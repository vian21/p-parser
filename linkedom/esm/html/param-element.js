import {HTMLElement} from './element';

/**
 * @implements globalThis.HTMLParamElement
 */
export class HTMLParamElement extends HTMLElement {
  constructor(ownerDocument, localName = 'param') {
    super(ownerDocument, localName);
  }
}
