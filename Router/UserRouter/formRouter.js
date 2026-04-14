const express = require("express");
const formRouter = express.Router();

const form = formRouter.get("/user", (req, res) => {
  res.render("user/formPage");
});

const formPost = formRouter.post("/user", (req, res) => {
  console.log(req.body);
  res.send("Form submitted");
});

const newform = formRouter.get("/user/newregsiter", (req, res) => {
  res.render("user/userRegister");
});

module.exports = {
  form,
  formPost,
  newform,
};
