import express from 'express'
import mongoose from 'mongoose'

import {route} from '../src/Roles/index'
import {userRoute} from '../src/User/index'

//connect to database
mongoose.connect("mongodb://localhost/crudts")
    .then(() => {
        console.log("Database connected");// when connected
    })
    .catch((error: unknown) =>{
        console.log("db error", error);//when error occurs
        process.exit(1);
    })

const app = express()

app.use(express.json());
app.use('/', route)
app.use('/', userRoute)
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`server running on PORT: ${PORT}`)
})
console.log("God");