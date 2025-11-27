const controller=require("../controller/controller")
const express =require("express");
const userAPIRouter=express.Router();
const customMiddleware=require("../middleware/customMiddleware")

userAPIRouter.post("/adduser",customMiddleware,controller.signup)
userAPIRouter.put("/updateuser/:id",customMiddleware,controller.updateUser)
userAPIRouter.delete("/deleteuser/:id",customMiddleware,controller.deleteUser)

module.exports=userAPIRouter;