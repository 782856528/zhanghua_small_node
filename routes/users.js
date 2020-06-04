var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var user = mongoose.model('USER');
const jwt = require('jsonwebtoken');
var secretkey = 'secretkey';
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
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
// 注册
router.post('/register', function (req, res, next) {
  let name = req.body.name;
  let password = req.body.password;
  if (name == '' || name == undefined || name == null || password == '' || password == undefined || password == null) {
    res.send("账号或密码不能为空")
  } else {
    user.find({ name: name }, function (err, dos) {
      if (dos.length > 0) {
        datas = {
          isSuccess: false,
          msg: "账号已存在"
        }
        res.send(datas)
      } else {
        user.create({ name: name, password: password }).then(result => {
          datas = {
            isSuccess: true,
            msg: "注册成功"
          }
          res.send(datas)
        }).catch(err => {
          console.log(err)
          return res.send("注册失败")
        })
      }
    })
  }
})
// 登录
router.post('/login', function (req, res, next) {
  let name = req.body.name;
  let password = req.body.password;
  if (name == '' || name == undefined || name == null || password == '' || password == undefined || password == null) {
    datas = {
      isSuccess: false,
      msg: "账号或密码不能为空"
    }
    res.send(datas)
  } else {
    user.find({ name: req.body.name, password: req.body.password }).then(result => {
      var token=jwt.sign({name:name},secretkey,{expiresIn: 60*60*24})
      if (result.length > 0) {
        datas = {
          isSuccess: true,
          data:{
            token:token
          },
          msg: "登录成功"
        }
        res.send(datas)
      } else {
        datas = {
          isSuccess: false,
          msg: "账号或密码错误"
        }
        res.send(datas)
      }

    })
  }

})

module.exports = router;
