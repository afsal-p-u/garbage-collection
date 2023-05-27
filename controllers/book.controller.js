const BookModel = require('../models/book.model')

// book new
const bookNew = async (req, res) => {
    const newOrder = new BookModel({
        ...req.body
    })

    try {
        await newOrder.save()
        return res.status(200).json('Ordered successfully')
    } catch (err) {
        return res.status(500).json(err)
    }
}

// get specific user orders
const getUserOrders = async (req, res) => {
    try {
        const userOrder = await BookModel.find({ name: req.params.name }).sort({ _id: -1 })
    
        return res.status(200).json(userOrder)
    } catch (err) {
        return res.status(500).json(err)

    }
}

module.exports = { bookNew, getUserOrders }