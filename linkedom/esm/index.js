import {DOMParser} from './dom/parser.js';
import {Document as _Document} from './interface/document';

import {illegalConstructor} from './shared/facades';
import {setPrototypeOf} from './shared/object';
export {parseJSON, toJSON} from './shared/parse-json';

export * from './shared/facades';
export * from './shared/html-classes';

export {DOMParser};

export {CustomEvent} from './interface/custom-event';
export {Event} from './interface/event';
export {EventTarget} from './interface/event-target';
export {InputEvent} from './interface/input-event';
export {NodeList} from './interface/node-list';
export {NodeFilter} from './interface/node-filter';

export const parseHTML = (html, globals = null) => (new DOMParser).parseFromString(
  html, 'text/html', globals
).defaultView;

export function Document() {
  illegalConstructor();
}

setPrototypeOf(Document, _Document).prototype = _Document.prototype;
