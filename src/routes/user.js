import express, { Router } from "express"
import { getUser } from "../controllers/user/getUser"
import { login } from "../controllers/user/login"
import { signup } from "../controllers/user/signup"

const userRoutes = new Router()

userRoutes.post("/login" , login)
userRoutes.post("/signup" , signup)
userRoutes.get("/:id" , getUser)


export default userRoutes