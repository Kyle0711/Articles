import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url))

export const createPath = (page) => path.resolve(__dirname, '..', 'src', `${page}.ejs`)