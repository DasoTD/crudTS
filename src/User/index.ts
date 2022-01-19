import express from 'express'
import {   deleteUser, updateUser } from './user.controller';
const userRoute = express.Router()

//userRoute.post('/user', createUser)
userRoute.put('/user/:id', updateUser)
userRoute.delete('/user/:id', deleteUser)

export { userRoute}