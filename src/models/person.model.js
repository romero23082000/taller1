const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    user_name:{type: String, require: true},
    lastname:{type: String, require: true},
    age:{type: Number, require: true},
    email:{type: String, require: true, unique: true},
    proffession:{type: String, require: true},
    address_work:{
        type: Object, 
        require: true,
        code_zip:{type: String, require: true},
        city_name:{type: String, require: true},
        coordinates:{type: Array, require: true}
    }
})
module.exports = mongoose.model('PersonCollection', userSchema)