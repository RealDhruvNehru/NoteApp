import { login, logout, signup } from "../controllers/users.controller.js";
import { Router } from "express";
import authorize from "../middleware/authorise.js";
const userRouter = Router()
userRouter.post('/signup', signup)
userRouter.post('/login', login)
userRouter.get('/logout', logout )
userRouter.get('/checkAuth',authorize)

export default userRouter