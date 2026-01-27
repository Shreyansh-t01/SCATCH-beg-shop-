const mongoose = require('mongoose')


const ownerSchema = mongoose.Schema(
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
        products:{
            type:Array,
            default: []
        },
        gstin:String
    })


    mongoose.exports = mongoose.model("user" , ownerSchema)