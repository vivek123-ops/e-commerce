const users = require("../module/usermodule");

const homepage = (req, res) => {
  res.render("user/formPage");
};

const userlogin = async (req, res) => {
  try {
    const { username, email, Gender, password } = req.body;
    const [rows] = await users.finduser(username, email, Gender, password);
    if (rows.length > 0) {
      res.send(`<script>
          alert("Login successful ✅");
            </script>`);
    }
    res.send(`<script>
          alert("Login is not successful ✅");
        </script>`);
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
        window.location.href = "/user";
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
