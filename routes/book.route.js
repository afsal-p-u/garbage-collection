const router = require('express').Router()

const { bookNew, getUserOrders, getPedingOrdersAdmin } = require('../controllers/book.controller')
const { verfiyUser, verifyAdminAuthorization } = require('../middleware/verify.usertype')

// book new
router.post('/', verfiyUser, bookNew)
router.get('/user/:name', verfiyUser, getUserOrders )
router.get('/pending', verifyAdminAuthorization, getPedingOrdersAdmin)

module.exports = router