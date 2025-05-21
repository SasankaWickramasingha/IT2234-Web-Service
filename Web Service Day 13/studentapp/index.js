const express=require('express');
const app=express();
const port=3001;
const mongoose = require('mongoose');
const coursert = require('./routes/courseRoute')

app.use(express.json())
app.use('/Course', coursert)
mongoose.connect('mongodb://localhost:27017/unidb').then(()=> {
    console.log("Database Connected");
}).catch((error)=>{
    console.log(error);
})

app.listen(port,()=>{
    console.log(`Service running on ${port}`);
})