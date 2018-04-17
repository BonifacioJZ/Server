const mongoose = require('mongoose')
const Shema = mongoose.Schema

const MatterShema = Shema({
    code:String,
    mattername:String,
    alumns:[{
        studentid:String,
        name:{
            firstname: String,
            lastname: String
        }
    }],
    descriptions:String

})

module.exports = mongoose.model('matter',MatterShema)