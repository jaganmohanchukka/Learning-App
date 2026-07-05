import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyparser from 'body-parser'
import cors from 'cors';
import userrouter from './routes/userroutes.js'
import courserouter from './routes/courseroutes.js'

dotenv.config()
const port =3000;
const app =express();
app.use(cors());
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("connection sucessfull");
}).catch((err)=>{
    console.log("connerction error ",err);
})
app.use(bodyparser.json());
app.use('/api', userrouter);
app.use('/api', courserouter)
app.listen(port,()=>{
    console.log("server started",port)
})
