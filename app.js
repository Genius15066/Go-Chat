//external imports
const express=require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const path=require('path');
const cookieParser = require("cookie-parser");

//internal imports
const { notFoundHandler,errorHandler}=require('./middlewares/common/errorHandler');
const loginRouter=require('./router/loginRouter')
const inboxRouter=require('./router/inboxRouter')
const usersRouter=require('./router/usersRouter')

const app=express();
dotenv.config();

//database connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log("database connection successful"))
.catch(err=>console.log(err));

//request parsers
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//set view engine
app.set("view engine","ejs");

//set static folder
app.use(express.static(path.join(__dirname,"public")));

//parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

//routing setup
app.use('/',loginRouter);
app.use('/inbox',inboxRouter);
app.use('/users',usersRouter);

//error handling
//404 not found handler
app.use(notFoundHandler);

//common error errorHandler
app.use(errorHandler);


app.listen(process.env.PORT,()=>{
    console.log(`app listenning to port ${process.env.PORT}`);
});
