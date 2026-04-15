const express = require("express");
const formRouter = express.Router();
const adminController = require("../../Controller/AdminController");

const adminform = formRouter.get("/admin", adminController.adminform);

const newadmin = formRouter.get("/user/newadmin", adminController.newadmin);

const createaccount = formRouter.post("/user/newadmin",adminController.createaccount);

const checkadmin = formRouter.post("/admin", adminController.checkadmin);

module.exports = {
  adminform,
  newadmin,
  createaccount,
  checkadmin,
};
