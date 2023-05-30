import {DOCUMENT_FRAGMENT_NODE} from '../shared/constants';
import {getInnerHtml, setInnerHtml} from '../mixin/inner-html';
import {NonElementParentNode} from '../mixin/non-element-parent-node';

/**
 * @implements globalThis.ShadowRoot
 */
export class ShadowRoot extends NonElementParentNode {
  constructor(host) {
    super(host.ownerDocument, '#shadow-root', DOCUMENT_FRAGMENT_NODE);
    this.host = host;
  }

  get innerHTML() {
    return getInnerHtml(this);
  }
  set innerHTML(html) {
    setInnerHtml(this, html);
  }
}
