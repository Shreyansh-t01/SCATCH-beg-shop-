const mongoose = require('mongoose')
const config = require('config');
const dbgr = require('debug')("development:mongoose")



mongoose
.connect(`${config.get("MONGODB_URI")}/scatch`)
// .connect("mongodb://127.0.0.1:27017/scatch")  //yaha semicolon nahi laga dena nahi to statement end ho jati hai yeh url tab tak hai jab ham development phase me hai local database hai yeh hamare pc ka
.then(function(){ 
   console.log("connected")
})
.catch(function(err){
  dbgr(err)
})

module.exports = mongoose.connection;     //yeh cheej hame oure scatch database ko controll karne ki power deti hai (it gives controll of the catch)