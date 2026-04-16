const express = require("express");
const productRouter = express.Router();
const AdminController = require("../../Controller/AdminController");

productRouter.post("/add-product/:userId", AdminController.productadd);
productRouter.get("/add-product/:userId", AdminController.productPage);

module.exports = productRouter;
