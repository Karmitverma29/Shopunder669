const express=require("express");
const CategoryModel = require("../Models/Category.model");
const Category=express.Router();
Category.use(express.json());

Category.get("/",async(req,res)=>{
    res.send(await CategoryModel.find());
});

Category.post("/create", async (req, res) => {
    try {
      await CategoryModel.create(req.body);
      res.status(200).send({ msg: "Category Added" });
    } catch (e) {
      console.log(e);
      res.status(400).send({ msg: "Not Found" });
    }
  });
  
  Category.patch("/update/:userID", async (req, res) => {
    try {
      const userID = req.params.userID;
      await CategoryModel.findOneAndUpdate({id:userID}, req.body);
      res.status(200).send({ msg: "Category Modified" });
    } catch (e) {
      console.log(e);
      res.status(400).send({ msg: "Not Found" });
    }
  });
  
  Category.delete("/delete/:userID", async (req, res) => {
      try {
        const userID = req.params.userID;
        await CategoryModel.findOneAndDelete({_id:userID})
        res.status(200).send({ msg: "Category deleted" });
      } catch (e) {
        console.log(e);
        res.status(400).send({ msg: "Not Found" });
      }
    });

module.exports=Category;