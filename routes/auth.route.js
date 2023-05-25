const { createUser, loginUser } = require('../controllers/auth.controller')

const router = require('express').Router()

// register
router.post('/register', createUser)
router.post('/login', loginUser)

module.exports = router