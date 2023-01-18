const mongoose=require("mongoose");
const ProductSchema=mongoose.Schema({
    id:Number,
    image:String,
    name:String,
    category:String,
    description:String,
    price:Number,
    offer_price:Number
});
const ProductModel=mongoose.model("Bymeproduct",ProductSchema);
module.exports=ProductModel;