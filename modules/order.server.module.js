var mongoose=require("mongoose");
var Userschema=new mongoose.Schema({
    name:String,
    picurl:String,
    price:Number,
    create_time:Date
}, { collection: 'order' })
mongoose.model("order",Userschema)