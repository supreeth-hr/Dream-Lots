import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGOURI)
    .then(()=>{
        console.log("Connected to the Database!");
    })
    .catch((error)=>{
        console.log(error);
    });

const app=express();

app.listen(3000,()=>{
    console.log("Server is running on PORT 3000");
})