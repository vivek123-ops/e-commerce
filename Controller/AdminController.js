const Admin = require("../module/adminmodule");

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
    return res.send(`<script>
        alert("data is submit");
        window.location.href="/admin"
      </script>`);
  } catch (error) {
    console.log(error);
  }
};

const checkadmin = async (req, res) => {
  console.log(req.body);
  try {
    const { username,email,Gender,password } = req.body;
    const [rows] = await Admin.checkadmin(
      username,
      email,
      Gender,
      password,
    );
    if (rows.length > 0) {
      return res.send(`<script>
        alert("Welcome admin");
        window.location.href="/admin"
      </script>`);
    }
    return res.send(`<script>
        alert("admin id is incorrect");
        window.location.href="/admin"
      </script>`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  adminform,
  newadmin,
  createaccount,
  checkadmin,
};
