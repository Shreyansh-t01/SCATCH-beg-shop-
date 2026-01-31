const express=require('express')
const router = express.Router();
const isloggedin=require('../middlewares/isLoggedin');
const productModel=require('../models/productModel')


router.get("/",function(req,res){
    let error=req.flash("error");  //jo flash msg hamne userrouter se bhej tha
    res.render("index",{error});
})

router.get("/login",function(req,res){
    res.render('login')
})


router.get("/logout",function(req,res){
    res.redirect('/login');
})
router.get("/shop",isloggedin, async function(req,res){
     
    let products=await productModel.find();
    console.log(products);
    

    
    res.render("shop",{products:products});
});





module.exports=router; 






