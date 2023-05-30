import {HTMLElement} from './element';

/**
 * @implements globalThis.HTMLMarqueeElement
 */
export class HTMLMarqueeElement extends HTMLElement {
  constructor(ownerDocument, localName = 'marquee') {
    super(ownerDocument, localName);
  }
}
