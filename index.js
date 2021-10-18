const express = require("express")
import bodyParser from "body-parser"
import { MongoClient } from "mongodb"
import userRoutes from "./src/routes/user"

const connectionString = `mongodb+srv://Tolulope:Tolulopeoduro2002@workforce-v2.iy6ag.mongodb.net/workforce-v2?retryWrites=true&w=majority`


const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


MongoClient.connect(connectionString  , ((err , client) => {
    if (err) {
        console.log(err)
    }
    app.locals.db = client
    app.listen(process.env.PORT || 6001)
    console.log("connected")
}))



app.use("/users" , userRoutes)