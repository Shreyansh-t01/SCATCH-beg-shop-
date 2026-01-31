const express = require('express');
const router = express.Router();
const productModel=require('../models/productModel');
const ownersModel = require('../models/ownersModel');


const uploads=require('../config/multer-config')


router.post("/create", uploads.single('image') , async function(req,res){
   
   try{
    let{ price,name,discount,bgcolor,panelcolor,textcolor}=req.body;

   let product = await productModel.create({
    image:{
        filename:req.file.filename,
        filepath:req.file.path,
        filemimetype:req.file.mimetype

    },
    price,
    discount,
    name,
    bgcolor,
    panelcolor,
    textcolor
   })
   res.redirect('/shop')

   }
   catch(err){
     console.log(err.message);
   }
})

module.exports = router 