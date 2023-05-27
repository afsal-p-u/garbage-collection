const jwt = require('jsonwebtoken')

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

module.exports = { verfiyUser }