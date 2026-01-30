const express=require('express')
const router = express.Router();
const isloggedin=require('../middlewares/isLoggedin');


router.get("/",function(req,res){
    let error=req.flash("error");  //jo flash msg hamne userrouter se bhej tha
    res.render("index",{error});
})

router.get("/login",function(req,res){
    res.render('login')
})

router.get("/shop",function(req,res){
    res.render("shop");
});


module.exports=router; 






