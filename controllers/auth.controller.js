const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')

const UserModel = require('../models/user.model')

// register user
const createUser = async (req, res) => {
    const emailCheck = await UserModel.findOne({ email: req.body.email })
    if (emailCheck) {
        return res.status(400).json("Email already exist!")
    }

    const contactCheck = await UserModel.findOne({ contact: req.body.contact })
    if (contactCheck) {
        return res.status(400).json("Contact number already exist!")
    }

    const nameCheck = await UserModel.findOne({ name: req.body.name })
    if (nameCheck) {
        return res.status(400).json("Try different name!")
    }

    const newUser = new UserModel({
        ...req.body,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTO_JS_SECRET)
    })

    try {
        newUser.save()

        return res.status(200).json("User created successfully")
    } catch (err) {
        res.status(500).json(err)
    }
}

// login user
const loginUser = async (req, res) => {
    const user = await UserModel.findOne({ email: req.body.email })
    if (!user) {
        return res.status(400).json('User does not exist!')
    }

    const decryptedPassword = CryptoJS.AES.decrypt(user.password, process.env.CRYPTO_JS_SECRET)
    .toString(CryptoJS.enc.Utf8)
    if (decryptedPassword !== req.body.password) {
        return res.status(400).json('Wrong password')
    }

    try {
        const accessToken = jwt.sign({
            user: user._id,
            isAdmin: user.isAdmin,
            email: user.email
        },
            process.env.JWT_SECRET,
            { expiresIn: "3d" }
        )

        return res.status(200).json({token: accessToken, user: user.name})
    } catch (err) {
        return res.status(500).json(err)
    } 
}

module.exports = { createUser, loginUser }