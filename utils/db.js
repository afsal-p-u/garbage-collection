const mongoose = require('mongoose')

const connection = async () => {
    await mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("DB Connection Successfull")
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = connection