const users = require("../module/usermodule");

const homepage = (req, res) => {
  res.render("user/formPage");
};

const userlogin = async (req, res) => {
  try {
    const { username, email, Gender, password } = req.body;
    const [rows] = await users.finduser(username, email, Gender, password);
    if (rows.length > 0) {
      return res.render("User/home");
    }
    return res.render("404");
  } catch (error) {
    console.log(error);
  }
};

const newRegister = (req, res) => {
  res.render("user/userRegister");
};

const newuser = async (req, res) => {
  try {
    const { fullname, email, phone, gender, password } = req.body;
    const user = new users(fullname, email, phone, gender, password);
    await user.save();
    console.log("data is added");
    res.send(` <script>
        alert("User registered successfully ✅");
        </script>`);
  } catch (error) {
    console.log(error);
    res.status(500).send("fail");
  }
};

module.exports = {
  homepage,
  userlogin,
  newRegister,
  newuser,
};
