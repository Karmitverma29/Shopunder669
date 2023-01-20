const express=require("express");
const ProductModel = require("../Models/Product.model");
const product=express.Router();
product.use(express.json());

product.get("/",async(req,res)=>{
  let val=req.query.search;
    res.send(await ProductModel.find({category:val}));
});

product.get("/:category",async(req,res)=>{
  const ids=req.params.category;
  const data=await ProductModel.find({category:ids});
  res.send(data);
});

product.get("/single/:id",async(req,res)=>{
  const ids=req.params.id;
  const data=await ProductModel.findOne({id:ids});
  res.send(data);
});

product.get("/:type",async(req,res)=>{
    const types=req.params.type;
    const {category,page,limit=20}=req.query;
    if(category){
        res.send(await ProductModel.find({type:types,category:category}).limit(limit).skip((page-1)*limit));
    }
    else{
        res.send(await ProductModel.find({type:types}).limit(limit).skip((page-1)*limit));
    }
});

product.post("/create", async (req, res) => {
    try {
      await ProductModel.create(req.body);
      res.status(200).send({ msg: "Product Added" });
    } catch (e) {
      console.log(e);
      res.status(400).send({ msg: "Not Found" });
    }
  });
  
  product.patch("/update/:userID", async (req, res) => {
    try {
      const userID = req.params.userID;
      await ProductModel.findOneAndUpdate({id:userID}, req.body);
      res.status(200).send({ msg: "Product Modified" });
    } catch (e) {
      console.log(e);
      res.status(400).send({ msg: "Not Found" });
    }
  });
  
  product.delete("/delete/:userID", async (req, res) => {
      try {
        const userID = req.params.userID;
        await ProductModel.findOneAndDelete({id:userID})
        res.status(200).send({ msg: "Product deleted" });
      } catch (e) {
        console.log(e);
        res.status(400).send({ msg: "Not Found" });
      }
    });

module.exports=product;