var mongoose=require("mongoose");
var Userschema=new mongoose.Schema({
   name:String,
   password:Number
})
mongoose.model("USER",Userschema)