const express = require("express");
const formRouter = express.Router();
const userController = require("../../Controller/userController");

const form = formRouter.get("/user", userController.homepage);

const formPost = formRouter.post("/user", userController.userlogin);

const newform = formRouter.get("/user/newregsiter", userController.newRegister);

const newUser = formRouter.post("/user/newUser", userController.newuser);

module.exports = {
  form,
  formPost,
  newform,
  newUser,
};
