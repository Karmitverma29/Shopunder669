const mongoose=require("mongoose");
const CouponSchema=mongoose.Schema({
    couponcode:String,
    discount:Number,
    minimumPurchase:Number
});
const CouponModel=mongoose.model("shop669Coupon",CouponSchema);
module.exports=CouponModel;