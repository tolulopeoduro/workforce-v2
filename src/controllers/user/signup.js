const { MongoClient, Db } = require("mongodb")
import {hash , genSalt , compare} from "bcrypt"
const mongodb = require("../../../index")


exports.signup = async (req , res) => {
    const client = req.app.locals.db;

    const p = await client.db("workforce-v2").collection("users").find({email : req.body.email}).count()
    if (p > 0) {
        return res.status(401).json({message : "email already used"})
    }     
    hash(req.body.password , 10, (err , hash)=> {
        console.log(hash)
        req.body.password = hash;
        client.db("workforce-v2").collection("users").insertOne(req.body)
        .then(() => {
            jwt
            res.status(201)
            .json({
                message : "Done"
            })
        })
    })
}

