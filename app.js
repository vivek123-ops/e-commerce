const express = require("express");
const homePage = require("./Router/UserRouter/homeRouter");
const {
  form,
  formPost,
  newform,
  newUser,
} = require("./Router/UserRouter/formRouter");
const {
  adminform,
  newadmin,
  createaccount,
  checkadmin,
} = require("./Router/AdminRouter/formRouter");
const {productSubmit } = require("./Router/AdminRouter/productRouter");



const app = express();
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use(homePage);
app.use(form);
app.use(formPost);
app.use(newform);
app.use(newUser);
app.use(adminform);
app.use(checkadmin);
app.use(newadmin);
app.use(createaccount);
app.use(productSubmit)

app.listen(3000, () => {
  console.log("server is starting");
});
