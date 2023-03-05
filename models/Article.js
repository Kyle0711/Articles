import { Schema, model } from 'mongoose'

const ArticleSchema = new Schema({
    content: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default model('Article', ArticleSchema)