const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')

const articleRoute = require('./routes/articles.js')

const app = express()

// Include EJS
app.set('view engine', 'ejs')

// Constants
const PORT = process.env.PORT || 3000
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME

// Middleware
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('styles'))

// Routes
// http://localhost:3000
app.use(articleRoute)

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.mfinbpr.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)

        app.listen(PORT, (error) => {
            error ? console.log(error) : console.log(`listening on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}
start()