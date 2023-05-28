const BookModel = require('../models/book.model')

// user
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

// admin
// get all pending orders
const getPedingOrdersAdmin = async (req, res) => {
    try {
        const pendingOrders = await BookModel.find({ status: "pending" })

        if (pendingOrders) {
            return res.status(200).json(pendingOrders)
        } else {
            return res.status(400).json("No pending orders")
        }

    } catch (err) {
        return res.status(400).json(err)
    }
}

// delet order
const deleteOrder = async (req, res) => {
    try {
        await BookModel.findByIdAndDelete(req.params.id)
        return res.status(200).json("Deleted successfully")
    } catch (err) {
        return res.status(500).json(err)
    }
}

// modidy order
const modifyOrder = async (req, res) => {
    try {
        await BookModel.findByIdAndUpdate(req.params.id, req.body, { new: true })

        return res.status(200).json('Updated successfully')
    } catch (err) {
        return res.status(500).json(err)
    }
}

module.exports = { bookNew, getUserOrders, getPedingOrdersAdmin, modifyOrder, deleteOrder }