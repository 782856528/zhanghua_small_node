 var mongoose=require("mongoose");
 var config=require("./config.js");
module.exports=function(){
    var db=mongoose.connect(config.url,{ useNewUrlParser: true, useUnifiedTopology: true });
    require("../modules/user.server.module.js")
    require("../modules/login.server.module.js")
    return db;
}