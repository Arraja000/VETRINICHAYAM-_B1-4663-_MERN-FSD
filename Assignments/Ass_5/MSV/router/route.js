const controller=require("../controller/controller")
const express =require("express");
const userAPIRouter=express.Router();

userAPIRouter.post("/adduser",controller.signup)
module.exports=userAPIRouter;