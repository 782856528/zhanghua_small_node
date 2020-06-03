var mongoose=require("mongoose");
var Userschema=new mongoose.Schema({
    UID:Number,
    NAME:String,
    AGE:Number,
    SEX:String
})
mongoose.model("LOGIN",Userschema)