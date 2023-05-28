const router = require('express').Router()

const { 
    bookNew, 
    getUserOrders, 
    getPedingOrdersAdmin, 
    deleteOrder, modifyOrder 
} = require('../controllers/book.controller')
const { verfiyUser, verifyAdminAuthorization } = require('../middleware/verify.usertype')

// book new
router.post('/', verfiyUser, bookNew)
router.get('/user/:name', verfiyUser, getUserOrders )
router.get('/pending', verifyAdminAuthorization, getPedingOrdersAdmin)
router.delete('/:id', verifyAdminAuthorization, deleteOrder)
router.put('/:id', verifyAdminAuthorization, modifyOrder)

module.exports = router