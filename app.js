const express = require("express");
const homePage = require("./Router/UserRouter/homeRouter");
const userRouter = require("./Router/UserRouter/formRouter");
const adminRouter = require("./Router/AdminRouter/formRouter");
const productRouter = require("./Router/AdminRouter/productRouter");

const app = express();
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));



app.use(homePage);
app.use(userRouter);
app.use(adminRouter);
app.use(productRouter);

app.listen(3000, () => {
  console.log("server is starting localhost");
});
