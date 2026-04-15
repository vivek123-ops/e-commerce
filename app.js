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

const app = express();
app.set("view engine", "ejs");

app.use(express.urlencoded());

app.use(homePage);
app.use(form);
app.use(formPost);
app.use(newform);
app.use(newUser);
app.use(adminform);
app.use(checkadmin);
app.use(newadmin);
app.use(createaccount);

app.listen(3000, () => {
  console.log("server is starting");
});
