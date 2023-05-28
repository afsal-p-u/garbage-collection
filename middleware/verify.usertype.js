const jwt = require('jsonwebtoken')
const UserModel = require('../models/user.model')

const verfiyUser = (req, res, next) => {
    const authHeader = req.headers.token

    if (authHeader) {
        jwt.verify(authHeader, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.status(400).json("Token is invalid")
            }
            req.user = user
            next()
        })

    } else {
        return res.status(400).json('Your not authorized')
    }
}

const verifyAdmin = async (req, res, next) => {
    const user = await UserModel.findOne({ email: req.body.email })

    if (user.isAdmin) {
        next()
    } else {
        res.status(400).json("Your are not allowed to login")
    }
}

const verifyAdminAuthorization = async (req, res, next) => {
    try {
        verfiyUser(req, res, () => {
            if (req.user.isAdmin) {
                next()
            } else {
                return res.status(400).json('Your are not authorized')
            }
        })
    } catch (err) {
        return res.status(500).json(err)
    }
}


module.exports = { verfiyUser, verifyAdmin, verifyAdminAuthorization }