const express = require('express');
const router = express.Router();
const ownerModel=require("../models/ownersModel")



console.log(ownerModel)

if(process.env.NODE_ENV ==="development"){
    
router.post("/create", async function(req,res){
  let owners= await ownerModel.find();
  if(owners.length>0){
    return res
    .status(503)
     .send("you dont have permission to create new owner");
  }
 

  let {fullname,email,password}=req.body;
  console.log(req.body);
  let createdOwner = await  ownerModel.create({
          fullname ,
        email,
        password ,
        
    })
    
    res.send("done")
})
}



router.get("/Admin",function(req,res){
  res.render('Admin')
})


module.exports = router

