import {MIME} from '../shared/symbols';
import {Document} from '../interface/document';

/**
 * @implements globalThis.Document
 */
export class SVGDocument extends Document {
  constructor() { super('image/svg+xml'); }
  toString() {
    return this[MIME].docType + super.toString();
  }
}
