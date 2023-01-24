const express=require("express");
const app=express();
const env=require("dotenv");
env.config();
const database_connection = require("./Configs/DB");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const UserModel = require("./Models/User.model");
const port=process.env.PORT || 3400;
const cors=require("cors");
const user = require("./Routes/User.route");
const product = require("./Routes/Product.route");
const cart = require("./Routes/Cart.route");
const {auth} = require("./Middlewares/Auth.middleware");
const Coupon = require("./Routes/Coupon.route");
const Category = require("./Routes/Category.route");
app.use(express.json());
app.use(cors({
  origin:"*"
}));
app.use("/user",user);
app.get("/",(req,res)=>{
res.send("Backend is deployed")
})
app.post("/signup", async (req, res) => {
    try {
      let data = await UserModel.find({ email: req.body.email });
      if (data.length > 0) {
        res.status(200).send({ msg: "User Already Exist" });
      } else {
        bcrypt.hash(req.body.password, 4, async (err, hash) => {
          if (err) {
            res.status(500).send({ msg: "Something went wrong !" });
          }
          req.body.password = hash;
          req.body.administration=false;
          await UserModel.create(req.body);
          res.status(200).send({ msg: "User registered Successfully" });
        });
      }
    } catch (e) {
      console.log(e);
      res.status(404).send({ msg: "Failed to create new user" });
    }
  });
  
  app.post("/login", async (req, res) => {
    try {
      let data = await UserModel.find({ email: req.body.email });
      if (data.length <= 0) {
        res.status(200).send({ msg: "User not found" });
      } else {
        bcrypt.compare(
          req.body.password,
          data[0].password,
           (err, result)=> {
            if (err) {
              res.status(500).send({ msg: "Something went wrong !" });
            } else if (result) {
              jwt.sign(
                { userID: data[0]._id },
                process.env.SEC_KEY,
                (err, token) => {
                  res
                    .status(200)
                    .send({ msg: "User login Successfully", token: token,displayName:data[0].name,administration: data[0].administration});
                }
              );
            }
          }
        );
      }
    } catch (e) {
      console.log(e);
      res.status(404).send({ msg: "Failed to login" });
    }
  });
  app.use("/product",product);
  app.use("/coupon",Coupon);
  app.use("/category",Category);
  app.use(auth);
  app.use("/cart",cart);
app.listen(port,()=>{
    try {
        database_connection;
        console.log(`database connected and listening to http://localhost:${port}`)
    } catch (e) {
        console.log(e);
        console.log("App is not listening")
    }
})