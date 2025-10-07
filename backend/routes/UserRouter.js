import { Router } from "express";
import { addUser, deleteAllUsers, deleteUser, getAllUsers, getUser, updateUser, userLogin } from "../controllers/User.js";
import hashPassword from "../middlewares/PasswordHashing.js";

const userRouter = Router()

userRouter.post('/signup', hashPassword, addUser )
userRouter.post('/login', userLogin )

userRouter.get('/users', getAllUsers)
userRouter.get('/:userId', getUser )
userRouter.put('/updateUser/:userId', updateUser)

userRouter.delete('/delete', deleteAllUsers)
userRouter.delete('/delete/:userId', deleteUser)

export default userRouter