import Article from '../models/Article.js'
import { createPath } from '../helpers/createPath.js'
import { genFilename } from '../helpers/genFilename.js'

// Create Article
export const createArticle = async (req, res) => {
    try {
        const { content } = req.body
        const newArticle = new Article({ content })
        await newArticle.save()
            .then(() => res.redirect('/articles'))
    } catch (error) {
        
    }
}

// Get All Articles
export const getAllArticles = async (req, res) => {
    try {
        const title = 'Articles'
        const __FILENAME__CSS__ = genFilename(title)
        await Article.find()
            .sort({ createdAt: -1 })
            .then((articles) => res.render(createPath('articles'), { articles, title, __FILENAME__CSS__ }))
    } catch (error) {
        
    }
}

// Get Article By Id
export const getArticleById = async (req, res) => {
    try {
        const title = 'Article'
        const __FILENAME__CSS__ = genFilename(title)
        await Article.findById(req.params.id)
            .then((article) => res.render(createPath('article'), { article, title, __FILENAME__CSS__ }))
    } catch (error) {
        
    }
}

// Delete Article By Id
export const deleteArticleById = async (req, res) => {
    try {
        await Article.findByIdAndDelete(req.params.id)
            .then(() => res.redirect('/articles'))
    } catch (error) {
        
    }
}

// Update Article By Id
export const updateArticleById = async (req, res) => {
    try {
        const { content } = req.body
        await Article.findByIdAndUpdate(req.params.id, { content }, { new: true })
            .then(() => res.redirect(`/articles/${req.params.id}`))
    } catch (error) {
        
    }
}

// Get Create Article
export const getCreateArticle = async (req, res) => {
    try {
        const title = 'Create Article'
        const __FILENAME__CSS__ = genFilename(title)
        res.render(createPath('createArticle'), { title, __FILENAME__CSS__ })
    } catch (error) {
        
    }
}

// Get Update Article
export const getUpdateArticle = async (req, res) => {
    try {
        const title = 'Edit Article'
        const __FILENAME__CSS__ = genFilename(title)
        await Article.findById(req.params.id)
            .then((article) => res.render(createPath('editArticle'), { title, article, __FILENAME__CSS__ }))
    } catch (error) {
        
    }
}