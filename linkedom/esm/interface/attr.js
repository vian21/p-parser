import {ATTRIBUTE_NODE} from '../shared/constants';
import {CHANGED, VALUE} from '../shared/symbols';
import {String} from '../shared/utils';
import {attrAsJSON} from '../shared/jsdon';
import {emptyAttributes} from '../shared/attributes';

import {attributeChangedCallback as moAttributes} from './mutation-observer';
import {attributeChangedCallback as ceAttributes} from './custom-element-registry';

import {Node} from './node';

const QUOTE = /"/g;

/**
 * @implements globalThis.Attr
 */
export class Attr extends Node {
  constructor(ownerDocument, name, value = '') {
    super(ownerDocument, '#attribute', ATTRIBUTE_NODE);
    this.ownerElement = null;
    this.name = String(name);
    this[VALUE] = String(value);
    this[CHANGED] = false;
  }

  get value() { return this[VALUE]; }
  set value(newValue) {
    const {[VALUE]: oldValue, name, ownerElement} = this;
    this[VALUE] = String(newValue);
    this[CHANGED] = true;
    if (ownerElement) {
      moAttributes(ownerElement, name, oldValue);
      ceAttributes(ownerElement, name, oldValue, this[VALUE]);
    }
  }

  cloneNode() {
    const {ownerDocument, name, [VALUE]: value} = this;
    return new Attr(ownerDocument, name, value);
  }

  toString() {
    const {name, [VALUE]: value} = this;
    return emptyAttributes.has(name) && !value ?
            name : `${name}="${value.replace(QUOTE, '&quot;')}"`;
  }

  toJSON() {
    const json = [];
    attrAsJSON(this, json);
    return json;
  }
}