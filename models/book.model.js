const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pickUpLocation: { type: String, required: true },
    address: { type: String, required: true },
    contact: { type: Number, required: true },
    status: { type: String, default: "pending" }
})

module.exports = mongoose.model("Book", BookSchema)