const mongoose = require('mongoose');


const userSchema = mongoose.Schema(
    {
        fullname : String,
        email : String,
        password : String,
        cart : {
            type:Array,
            defualt:[]
        } ,
      
        contact :Number,
        picture : String ,
        orders:{
            type:Array,
            default: []
        }
    })


    module.exports = mongoose.model("user" , userSchema);
 