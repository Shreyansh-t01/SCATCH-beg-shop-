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
     
        contact :Number,
        picture : String ,
        products:{
            type:Array,
            default: []
        },
        gstin:String
    })

 
    module.exports = mongoose.model("Owner" , ownerSchema)