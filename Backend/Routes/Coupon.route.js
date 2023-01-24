const express=require("express");
const CouponModel = require("../Models/Coupon.model");
const Coupon=express.Router();
Coupon.use(express.json());

Coupon.get("/",async(req,res)=>{
    res.send(await CouponModel.find());
});

Coupon.post("/create", async (req, res) => {
    try {
      await CouponModel.create(req.body);
      res.status(200).send({ msg: "Coupon Added" });
    } catch (e) {
      console.log(e);
      res.status(400).send({ msg: "Not Found" });
    }
  });
  
  Coupon.patch("/update/:userID", async (req, res) => {
    try {
      const userID = req.params.userID;
      await CouponModel.findOneAndUpdate({id:userID}, req.body);
      res.status(200).send({ msg: "Coupon Modified" });
    } catch (e) {
      console.log(e);
      res.status(400).send({ msg: "Not Found" });
    }
  });
  
  Coupon.delete("/delete/:userID", async (req, res) => {
      try {
        const userID = req.params.userID;
        await CouponModel.findOneAndDelete({_id:userID})
        res.status(200).send({ msg: "Coupon deleted" });
      } catch (e) {
        console.log(e);
        res.status(400).send({ msg: "Not Found" });
      }
    });

module.exports=Coupon;