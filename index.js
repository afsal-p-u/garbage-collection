const express = require('express')
const cors = require('cors')

require('dotenv').config()

const authRoutes = require('./routes/auth.route')
const bookRoutes = require('./routes/book.route')

const db = require('./utils/db')

const app = express()
app.use(express.json())
app.use(cors())
db()

app.use('/api/auth', authRoutes)
app.use('/api/book', bookRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log('Server Running on PORT:', PORT))