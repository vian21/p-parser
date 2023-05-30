import {registerHTMLClass} from '../shared/register-html-class';

import {TextElement} from './text-element';

const tagName = 'title';

/**
 * @implements globalThis.HTMLTitleElement
 */
class HTMLTitleElement extends TextElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }
}

registerHTMLClass(tagName, HTMLTitleElement);

export {HTMLTitleElement};
