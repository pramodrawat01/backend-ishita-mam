import { Router } from "express";
import { addUser, deleteAllUsers, deleteUser, getAllUsers, getUser, updateUser } from "../controllers/User.js";
import hashPassword from "../middlewares/PasswordHashing.js";

const userRouter = Router()

userRouter.post('/addUser', hashPassword, addUser )
userRouter.get('/users', getAllUsers)
userRouter.get('/users/:userId', getUser )
userRouter.put('/updateUser/:userId', updateUser)

userRouter.delete('/delete', deleteAllUsers)
userRouter.delete('/delete/:userId', deleteUser)

export default userRouter