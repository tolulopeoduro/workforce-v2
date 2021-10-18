import express, { Router } from "express"
import { login } from "../controllers/user/login"
import { signup } from "../controllers/user/signup"

const userRoutes = new Router()

userRoutes.post("/login" , login)
userRoutes.post("/signup" , signup)

export default userRoutes