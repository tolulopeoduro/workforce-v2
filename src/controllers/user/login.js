const { compare } = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.login = (req , res ) => {
    const client = req.app.locals.db
    client.db("workforce-v2").collection("users").findOne({email : req.body.email})
    .then(user => {
        console.log(req.body)
        if (!user) {
            return res.status(401).json({
                message : "user not found"
            })
        }
        compare(req.body.password , user.password).then(
            (valid) => {
                if(!valid) {
                    return res.status(401).json({
                        message : "incorrect password"
                    })
                }
                const token = jwt.sign({userId : user._id}, "my-string" , {expiresIn : '24h'})
                res.status(200).json({
                    userId : user._id,
                    token : token
                })
            } 
        ).catch(error => res.status(500).json({message : "network errr"}))
    }).catch(error => res.status(500).json({message : "network error"}))
}