 var mongoose=require("mongoose");
 var config=require("./config.js");
module.exports=function(){
    var db=mongoose.connect(config.url,{ useNewUrlParser: true, useUnifiedTopology: true });
    require("../modules/goods.server.module.js")
    require("../modules/user.server.module.js")
    require("../modules/order.server.module.js")
    return db;
}