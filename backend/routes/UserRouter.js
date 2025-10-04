import { Router } from "express";
import { addUser, deleteAllUsers, deleteUser, getAllUsers, getUser, updateUser } from "../controllers/User.js";

const userRouter = Router()

userRouter.post('/addUser', addUser )
userRouter.get('/users', getAllUsers)
userRouter.get('/users/:userId', getUser )
userRouter.put('/updateUser/:userId', updateUser)

userRouter.delete('/delete', deleteAllUsers)
userRouter.delete('/delete/:userId', deleteUser)

export default userRouter