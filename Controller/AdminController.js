const Admin = require("../module/adminmodule");
const Product = require("../module/Productmodue");

const adminform = (req, res) => {
  res.render("Admin/formPage");
};

const newadmin = (req, res) => {
  res.render("Admin/newAdmin");
};

const createaccount = async (req, res) => {
  try {
    const { fullname, email, phone, gender, password } = req.body;
    const newadmin = new Admin(fullname, email, phone, gender, password);
    await newadmin.save();
    console.log("data is submit");
    res.render("Admin/ProductPage")
  } catch (error) {
    console.log(error);
  }
};

const checkadmin = async (req, res) => {
  console.log(req.body);
  try {
    const { username, email, Gender, password } = req.body;
    const [rows] = await Admin.checkadmin(username, email, Gender, password);
    if (rows.length > 0) {
      return res.render("Admin/productPage");
    }
    return res.send(`<script>
        alert("admin id is incorrect");
        window.location.href="/admin"
      </script>`);
  } catch (error) {
    console.log(error);
  }
};

const productadd = async (req, res) => {
  console;
  try {
    console.log(req.body);
    const { name, price, category, description, image } = req.body;
    const newProduct = new Product(name, price, category, description, image);
    await newProduct.save();
    return res.render("Admin/productPage");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  adminform,
  newadmin,
  createaccount,
  checkadmin,
  productadd,
};
