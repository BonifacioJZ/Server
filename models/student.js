'use stric'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StudentShema = Schema({
    studentid:String,
    name:{
        firstname:String,
        lastname:String
    },
    age:Number,
    matter:[{
        code:String,
        mattername:String,
        qualification:Number
    }]

})

module.exports = mongoose.model('student',StudentShema)