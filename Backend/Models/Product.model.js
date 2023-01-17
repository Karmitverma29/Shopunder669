const mongoose=require("mongoose");
const ProductSchema=mongoose.Schema({
    image:String,
    name:String,
    description:String,
    price:Number,
    offer_price:Number
});
const ProductModel=mongoose.model("Bymeproduct",ProductSchema);
module.exports=ProductModel;