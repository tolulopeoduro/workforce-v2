const express = require("express")
import bodyParser from "body-parser"
import { MongoClient } from "mongodb"
import authRoutes from "./src/routes/user"


import cors from "cors"

const connectionString = `mongodb+srv://Tolulope:Tolulopeoduro2002@workforce-v2.iy6ag.mongodb.net/workforce-v2?retryWrites=true&w=majority`


const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

MongoClient.connect(connectionString  , ((err , client) => {
    if (err) {
        console.log(err)
    }
    app.locals.client = client
    app.listen(process.env.PORT || 6001)
    console.log("connected")
}))


app.use("/auth" , authRoutes)