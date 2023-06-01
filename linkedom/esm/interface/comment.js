import {COMMENT_NODE} from '../shared/constants';
import {VALUE} from '../shared/symbols';

import {CharacterData} from './character-data';

/**
 * @implements globalThis.Comment
 */
export class Comment extends CharacterData {
  constructor(ownerDocument, data = '') {
    super(ownerDocument, '#comment', COMMENT_NODE, data);
  }

  cloneNode() {
    const {ownerDocument, [VALUE]: data} = this;
    return new Comment(ownerDocument, data);
  }

  toString() { return `<!--${this[VALUE]}-->`; }
}
