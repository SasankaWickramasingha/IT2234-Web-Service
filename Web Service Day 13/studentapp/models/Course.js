const mongoose = require('mongoose')
const courseSchema = new mongoose.Schema({
    code:{type:String,require:true},
    name:{type:String,require:true},
    credits:{type:Number,require:true},
    description:{type:String}
})

const Course = mongoose.model('courses', courseSchema)
const webservice = new Course({
    code:'IT2234', 
    name:'Practical for Web Services', 
    credits:3, 
    description:'Build a rest API with nodeJS Technology'
})
webservice.save()
module.exports=Course