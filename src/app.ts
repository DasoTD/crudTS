import express from 'express'
import mongoose from 'mongoose'

import {route} from '../src/Roles/index'

mongoose.connect("mongodb://localhost/crudts")
    .then(() => {
        console.log("Database connected");
    })
    .catch((error: unknown) =>{
        console.log("db error", error);
        process.exit(1);
    })

const app = express()

app.use(express.json());
app.use('/', route)
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`server running on PORT: ${PORT}`)
})
console.log("God");