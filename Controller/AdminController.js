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
    res.render("Admin/ProductPage");
  } catch (error) {
    console.log(error);
  }
};

const checkadmin = async (req, res) => {
  try {
    const { username, email, Gender, password } = req.body;

    const [rows] = await Admin.checkadmin(username, email, Gender, password);

    if (rows.length > 0) {
      const userId = rows[0].user_id; // ✅ pehle variable banao
      console.log(userId);
      return res.render("Admin/productPage", { userId: userId }); // ✅ pass correctly
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
  try {
    const { userId } = req.params;
    const { name, price, category, description, image } = req.body;
    const newProduct = new Product(
      name,
      price,
      category,
      description,
      image,
      userId,
    );
    await newProduct.save();
    return res.render("Admin/productPage", { userId: userId });
  } catch (error) {
    console.log(error);
  }
};

const productPage = (req, res) => {
  res.render("Admin/productPage", { userId: userId });
};

module.exports = {
  adminform,
  newadmin,
  createaccount,
  checkadmin,
  productadd,
  productPage,
};
