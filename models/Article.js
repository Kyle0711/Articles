const { Schema, model } = require('mongoose')

const ArticleSchema = new Schema({
    content: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = model('Article', ArticleSchema)