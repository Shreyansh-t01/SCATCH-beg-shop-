const express = require('express');
const router = express.Router();
const ownerModel=require("../models/ownersModel")

router.get("/",function(req,res){
    res.send('hey its working');
})
console.log(ownerModel)

if(process.env.NODE_ENV ==="development"){
    
router.get("/create", async function(req,res){
  let owners= await ownerModel.find();
  if(owners.length>0){
    return res
    .send(503)
     .send("you dont have permission to create new owner");
  }
 

  let {fullname,email,password}=req.body;
  let createdOwner = await  ownerModel.create({
          fullname ,
        email,
        password ,
        
    })
    res.status(200).send(createdOwner)
})
}


module.exports = router

