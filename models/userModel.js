const mongoose = require('mongoose')


const userSchema = mongoose.Schema(
    {
        fullname : String,
        email : String,
        password : String,
        cart : {
            type:Array,
            defualt:[]
        } ,
        isadmin : Boolean,
        contact :Number,
        picture : String ,
        orders:{
            type:Array,
            default: []
        }
    })


    mongoose.exports = mongoose.model("user" , userSchema)
 