var express = require('express');
var router = express.Router();
var mongoose=require("mongoose");
var user=mongoose.model('USER');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/search',function(req,res,next){

  user.find(function(err,data){
    res.send(data)
  })
})
router.post('/add',function(req,res){
  var name = req.body.name;
    var AGE = req.body.AGE;
    var SEX = req.body.SEX;
  user.save({NAME:name,SEX:SEX,AGE:AGE},function(err,data){
    res.send(data)
  })
})
module.exports = router;
