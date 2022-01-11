import express from 'express'
import {  createUser } from './user.controller';
const userRoute = express.Router()

userRoute.post('/user', createUser)

export { userRoute}