const express = require("express");
const productRouter = express.Router();
const AdminController=require("../../Controller/AdminController")

const productSubmit = productRouter.post("/add-product",AdminController.productadd);

module.exports = {
  productSubmit,
};
