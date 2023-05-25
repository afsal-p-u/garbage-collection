const express = require('express')
const cors = require('cors')

require('dotenv').config()

const AuthRoutes = require('./routes/auth.route')

const db = require('./utils/db')

const app = express()
app.use(express.json())
app.use(cors())
db()

app.use('/api/auth', AuthRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log('Server Running on PORT:', PORT))