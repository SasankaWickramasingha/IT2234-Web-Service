const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    _id:{type:String, require:true}, 
    empName:{type:String, require:true},
    empPosition:{type:String, require:true},
    empDOB:{type:Date},
    empGender:{type:String},
    prjId:[{
        type:String,
        require:true,
        ref:'projects'
    }],
    depId:{
        type:String,
        require:true,
        ref:'departments'
    }
})

const Employee = mongoose.model('employees', employeeSchema)
const punya = new Employee({ 
    _id:'IT0001', 
    empName:'Malindu Sasanka',
    empDOB:'12-11-2001',
    empPosition:'Engineer',
    empGender:'male',
    prjId:['PRJ0001', 'PRJ0002'],
    depId:'DIT01'
})
punya.save()

module.exports = Employee