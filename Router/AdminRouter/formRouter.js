const express = require("express");
const adminRouter = express.Router();
const adminController = require("../../Controller/AdminController");

adminRouter.get("/admin", adminController.adminform);

adminRouter.get("/user/newadmin", adminController.newadmin);

adminRouter.post("/user/newadmin",adminController.createaccount);

adminRouter.post("/admin", adminController.checkadmin);

module.exports=adminRouter;