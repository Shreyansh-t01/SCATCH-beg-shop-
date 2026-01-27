const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    image :String,
    price:String,
    name:String,
    discount:{
        type:Number,
        default:0
    },
    bgcolor: String,
    panelcolor: String,
    textcolor: String
})

mongoose.exports=mongoose.model("product" , productSchema)