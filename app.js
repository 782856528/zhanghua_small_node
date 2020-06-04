var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require("./config/mongoose.js");
var db=mongoose();
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categoryRouter = require('./routes/category');
var orderRouter = require('./routes/order');
var jwt = require('jsonwebtoken');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/category',categoryRouter);
app.use('/order',orderRouter);
app.use(function(req,res,next){
  if(req.url !='/users/login' && req.url !='/users/register'&&req.url.indexOf("/images/")){
      //token可能存在post请求和get请求
      let token = req.headers.authorization;
      jwt.verify(token,secretkey,function(err,decode){
         if(err){
             res.json({
                 message: 'token非法',
                 status: 2000
             })
         }else{
             next();
         }
      })
  }else{
      next();
  }
})



module.exports = app;
