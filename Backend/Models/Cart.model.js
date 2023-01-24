const mongoose=require("mongoose");
const CartSchema=mongoose.Schema({
    image:String,
    title:String,
    description:String,
    price:Number,
    category:String,
    name:String,
    offer_price:Number,
    userID:String
});
const CartModel=mongoose.model("shop669cart",CartSchema);
module.exports=CartModel;