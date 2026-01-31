const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    image :{
        filename:String,
        filepath:String,
        filemimetype:String
    },
    price:Number,
    name:String,
    discount:{
        type:Number,
        default:0
    },
    bgcolor: String,
    panelcolor: String,
    textcolor: String
})

module.exports=mongoose.model("product" , productSchema)