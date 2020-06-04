var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var order = mongoose.model('order');
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
// 添加订单
router.post('/addorder', function (req, res, next) {
    let name=req.body.name;
    let price=req.body.price;
    let picurl=req.body.picurl;
    console.log(name)
    order.create({name:name,price:price,picurl:picurl,create_time:new Date()}).then(result=>{
        datas = {
            isSuccess: true,
            msg: "下单成功"
          }
          res.send(datas)
    }).catch(err=>{
        res.send(err)
    })
})
// 订单展示
router.get('/orderList', function (req, res, next) {
    order.find().then(result=>{
        datas = {
            isSuccess: true,
            data:result
          }
      res.send(datas)
    }).catch(err=>{
        
    })
})
// 删除订单
router.post('/deleteorder', function (req, res, next) {
    let id=req.body.id;
    order.remove({_id:id}).then(result=>{
        datas = {
            isSuccess: true,
            msg:"删除成功"
          }
      res.send(datas)
    }).catch(err=>{
        res.send(err)
    })
})

module.exports = router;
