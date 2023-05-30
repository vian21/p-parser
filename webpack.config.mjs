import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export default {
    target:'web',
    entry: {
        index: './src/index.js'
    },
    resolve: {
      enforceExtension: false,

    },
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development'
}