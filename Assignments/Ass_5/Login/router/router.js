const controller=require("../controller/control")
const express =require("express");
const userAPIRouter=express.Router();

userAPIRouter.post("/adduser",controller.registeruser)
module.exports=userAPIRouter;