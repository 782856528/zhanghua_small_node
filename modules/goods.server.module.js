var mongoose=require("mongoose");
var Userschema=new mongoose.Schema({
    type:String,
    data:[{name:String,price:Number,picurl:String}]
   
}, { collection: 'category' })
mongoose.model("category",Userschema)