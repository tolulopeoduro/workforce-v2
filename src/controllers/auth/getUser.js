exports.getUser = async (req , res) => {
    const client = req.app.locals.client
    const user = await client.db("workforce-v2").collection("users").findOne({id : req.body.id})
    res.status(200).json({
        data : user
    }).end()
}