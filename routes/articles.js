const { Router } = require('express')
const { createArticle, getAllArticles, getArticleById, deleteArticleById, updateArticleById, getCreateArticle, getUpdateArticle } = require('../controllers/articles.js')
const router = new Router()

// Create Article
// http://localhost:3000/articles
router.post('/create-article', createArticle)

// Get All Articles
// http://localhost:3000/articles
router.get('/articles', getAllArticles)

// Get Article By Id
// http://localhost:3000/articles/:id
router.get('/articles/:id', getArticleById)

// Delete Article By Id
// http://localhost:3000/articles/:id
router.delete('/articles/:id', deleteArticleById)

// Update Article By Id
// http://localhost:3000/articles/:id
router.put('/articles/:id', updateArticleById)

// Get Create Article
// http://localhost:3000/create-article
router.get('/create-article', getCreateArticle)

// Get Update Article
// http://localhost:3000/create-article
router.get('/edit/:id', getUpdateArticle)

module.exports = router