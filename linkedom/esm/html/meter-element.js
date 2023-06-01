import {HTMLElement} from './element';

/**
 * @implements globalThis.HTMLMeterElement
 */
export class HTMLMeterElement extends HTMLElement {
  constructor(ownerDocument, localName = 'meter') {
    super(ownerDocument, localName);
  }
}
