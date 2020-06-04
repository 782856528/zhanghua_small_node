var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var categorys = mongoose.model('category');
// 分页
// router.get('/search',function(req,res,next){
//   var pageSize=parseInt(req.query.pageSize);
//   var page=parseInt(req.query.page);
//   let rows;
//   if(page>=0){
//     rows=(page-1)*pageSize
//   }
//   logIn.find().limit(pageSize).skip(rows).then(resx=>{
//      res.send(resx)
//   })
// })
// 展示所有
router.post('/goodsList', function (req, res, next) {

    if(req.query!={}){
        categorys.find().then(result=>{
            datas = {
                isSuccess: true,
                data:result
              }
            res.send(datas)
        }) 
    }else{
        categorys.find({type:req.query.type}).then(result=>{
            datas = {
                isSuccess: true,
                data:result
              }
            res.send(datas)
        }) 
    }
})


module.exports = router;
