const express = require('express');
const router = express.Router();
const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken')
const cookie=require('cookie-parser')

const userModel=require('../models/userModel')


const {generateToken}=require('../utils/generatetokens') 
const{registerUser,loginUser,logoutUser}=require('../controllers/authController')



router.get("/",function(req,res){
    res.send('hey its working');
})
router.post('/register',registerUser)
router.post('/login',loginUser)





module.exports = router