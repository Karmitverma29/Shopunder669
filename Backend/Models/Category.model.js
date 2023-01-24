const mongoose=require("mongoose");
const CategorySchema=mongoose.Schema({
    CategoryName:String,
    CategoryImage:String
});
const CategoryModel=mongoose.model("shop669Category",CategorySchema);
module.exports=CategoryModel;