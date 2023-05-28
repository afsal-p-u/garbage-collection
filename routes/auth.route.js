const router = require('express').Router() 

const { createUser, loginUser } = require('../controllers/auth.controller')
const { verifyAdmin } = require('../middleware/verify.usertype')


// register
router.post('/register', createUser)
router.post('/login', loginUser)
router.post('/admin', verifyAdmin ,loginUser)

module.exports = router