'use strict';
// Internal
const NODE_END = -1;
exports.NODE_END = NODE_END;

// Node
const ELEMENT_NODE = 1;
exports.ELEMENT_NODE = ELEMENT_NODE;
const ATTRIBUTE_NODE = 2;
exports.ATTRIBUTE_NODE = ATTRIBUTE_NODE;
const TEXT_NODE = 3;
exports.TEXT_NODE = TEXT_NODE;
const COMMENT_NODE = 8;
exports.COMMENT_NODE = COMMENT_NODE;
const DOCUMENT_NODE = 9;
exports.DOCUMENT_NODE = DOCUMENT_NODE;
const DOCUMENT_TYPE_NODE = 10;
exports.DOCUMENT_TYPE_NODE = DOCUMENT_TYPE_NODE;
const DOCUMENT_FRAGMENT_NODE = 11;
exports.DOCUMENT_FRAGMENT_NODE = DOCUMENT_FRAGMENT_NODE;

// Elements
const BLOCK_ELEMENTS = new Set(['ARTICLE', 'ASIDE', 'BLOCKQUOTE', 'BODY', 'BR', 'BUTTON', 'CANVAS', 'CAPTION', 'COL', 'COLGROUP', 'DD', 'DIV', 'DL', 'DT', 'EMBED', 'FIELDSET', 'FIGCAPTION', 'FIGURE', 'FOOTER', 'FORM', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'LI', 'UL', 'OL', 'P']);
exports.BLOCK_ELEMENTS = BLOCK_ELEMENTS;

// TreeWalker
const SHOW_ALL = -1;
exports.SHOW_ALL = SHOW_ALL;
const SHOW_ELEMENT = 1;
exports.SHOW_ELEMENT = SHOW_ELEMENT;
const SHOW_TEXT = 4;
exports.SHOW_TEXT = SHOW_TEXT;
const SHOW_COMMENT = 128;
exports.SHOW_COMMENT = SHOW_COMMENT;

// Document position
const DOCUMENT_POSITION_DISCONNECTED = 0x01;
exports.DOCUMENT_POSITION_DISCONNECTED = DOCUMENT_POSITION_DISCONNECTED;
const DOCUMENT_POSITION_PRECEDING = 0x02;
exports.DOCUMENT_POSITION_PRECEDING = DOCUMENT_POSITION_PRECEDING;
const DOCUMENT_POSITION_FOLLOWING = 0x04;
exports.DOCUMENT_POSITION_FOLLOWING = DOCUMENT_POSITION_FOLLOWING;
const DOCUMENT_POSITION_CONTAINS = 0x08;
exports.DOCUMENT_POSITION_CONTAINS = DOCUMENT_POSITION_CONTAINS;
const DOCUMENT_POSITION_CONTAINED_BY = 0x10;
exports.DOCUMENT_POSITION_CONTAINED_BY = DOCUMENT_POSITION_CONTAINED_BY;
const DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 0x20;
exports.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;

// SVG
const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
exports.SVG_NAMESPACE = SVG_NAMESPACE;