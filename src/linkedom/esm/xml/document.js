import {MIME} from '../shared/symbols';
import {Document} from '../interface/document';

/**
 * @implements globalThis.XMLDocument
 */
export class XMLDocument extends Document {
  constructor() { super('text/xml'); }
  toString() {
    return this[MIME].docType + super.toString();
  }
}
