const express = require("express");
const userRouter = express.Router();
const userController = require("../../Controller/userController");

userRouter.get("/user", userController.homepage);

userRouter.post("/user", userController.userlogin);

userRouter.get("/user/newregsiter", userController.newRegister);

userRouter.post("/user/newUser", userController.newuser);


module.exports=userRouter;


 