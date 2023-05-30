// https://dom.spec.whatwg.org/#nondocumenttypechildnode
// CharacterData, Element

import {ELEMENT_NODE} from '../shared/constants';

import {nextSibling, previousSibling} from '../shared/node';

export const nextElementSibling = node => {
  let next = nextSibling(node);
  while (next && next.nodeType !== ELEMENT_NODE)
    next = nextSibling(next);
  return next;
};

export const previousElementSibling = node => {
  let prev = previousSibling(node);
  while (prev && prev.nodeType !== ELEMENT_NODE)
    prev = previousSibling(prev);
  return prev;
};
