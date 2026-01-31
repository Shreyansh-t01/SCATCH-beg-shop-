const express = require('express')
const app = express()




const ownersRouter = require('./routes/ownerRouter');
const productsRouter = require('./routes/productsRouter');
const usersRouter = require('./routes/usersRouter');
const indexRouter=require('./routes/index');


const db = require("./config/mongoose-connection");

const cookieParser = require('cookie-parser')
const path = require('path')
require("dotenv").config()
const expressSession=require('express-session')


const flash = require('connect-flash')
app.use(
    expressSession({
        resave:false,
        saveuninitialized:false,
        secret:process.env.EXPRESS_SESSION_SECRET,
    })
);
app.use(flash());




app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname,'uploads')))
app.set('view engine','ejs')







app.use("/",indexRouter)                  
app.use("/owners",ownersRouter);
app.use("/users",usersRouter);
app.use("/products",productsRouter);



app.listen(3000)
