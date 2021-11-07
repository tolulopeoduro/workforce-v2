const jwt = require("jsonwebtoken")

module.exports = (req , res , next) => {
    try {
        const decodedToken = jwt.verify(req.headers.authorization.split(" ")[1] , "my-string");
        const userId = decodedToken.userId;
        if (!req.body.userId) {
            return res.status(401).json({error : "user not logged in"})
        } else if (req.body.userId != decodedToken.userId) {
            return res.status(401).json({error : "user not authorized"})
        }
        next()
    } catch {
        res.status(401).json({
            error : "invalid request"
        })
    }
}