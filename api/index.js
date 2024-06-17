import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();

mongoose.connect(process.env.MONGOURI)
    .then(()=>{
        console.log("Connected to the Database!");
    })
    .catch((error)=>{
        console.log(error);
    });

const app=express();
app.use(express.json());

app.listen(3000,()=>{
    console.log("Server is running on PORT 3000");
});

app.use('/api/user', UserRouter);
app.use('/api/auth', authRouter);