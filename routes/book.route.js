const router = require('express').Router()

const { bookNew, getUserOrders } = require('../controllers/book.controller')
const { verfiyUser } = require('../middleware/verify.usertype')

// book new
router.post('/', verfiyUser, bookNew)
router.get('/user/:name', verfiyUser, getUserOrders )

module.exports = router