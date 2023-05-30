import {HTMLElement} from './element';

/**
 * @implements globalThis.HTMLLegendElement
 */
export class HTMLLegendElement extends HTMLElement {
  constructor(ownerDocument, localName = 'legend') {
    super(ownerDocument, localName);
  }
}
