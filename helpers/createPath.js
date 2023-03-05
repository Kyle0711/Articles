const path = require('path')

const createPath = (page) => path.resolve(__dirname, '..', 'src', `${page}.ejs`)

module.exports = createPath