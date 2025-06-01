const express = require('express');
const app = express();
const port = 3001;
const mongoose = require('mongoose');
const etfrt = require('./routes/etfRoute')
const departmentrt = require('./routes/departmentRoute')
const employeert = require('./routes/employeeRoute')
const projectrt = require('./routes/projectRoute')

app.use(express.json())
app.use('/ETF', etfrt)
app.use('/Department', departmentrt)
app.use('/Employee', employeert)
app.use('/Project', projectrt)

mongoose.connect('mongodb://localhost:27017/EmployeeinfoDB').then(()=>{
    console.log("Database connected")
}).catch((error)=>{
    console.error(error);
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})

