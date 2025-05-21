const mongoose=require('mongoose')
const studentSchema=new mongoose.Schema({
    _id:{type:String,require:true},
    name:{type:String,require:true},
    date_of_birth:{type:Date},
    gender:{type:String},
    degreeId:{
        type:String,
        require:true,
        ref:'Degree'
    }
})

const Student=mongoose.model('students',studentSchema)
const kolins=new Student({
    _id:'2020IT01',
    name:'Peter Kolins',
    date_of_birth:'01-05-1995',
    gender:'male',
    degreeId:'FAS2000ICT'
})
kolins.save()
module.exports=Student 