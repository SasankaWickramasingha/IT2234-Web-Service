const mongoose = require('mongoose')

const ETFSchema = new mongoose.Schema({
    _id:{type:String, require:true}, 
    balance:{type:Number, require:true},
    interestRate:{type:Number}
})

const ETF = mongoose.model('etfs', ETFSchema)
const punya = new ETF({ 
    _id:'IT0001', 
    balance:1000000,
    interestRate:5
})
punya.save()

module.exports = ETF