const express = require("express");
const productRouter = express.Router();
const AdminController=require("../../Controller/AdminController")

productRouter.post("/add-product",AdminController.productadd);


module.exports=productRouter;

