const db = require("../utility/database");

class Admin {
  constructor(fullname, email, phone, gender, password) {
    if (!fullname || !email || !phone || !gender || !password) {
      throw new Error("all valued are required");
    }
    this.fullname = fullname;
    this.email = email;
    this.phone = phone;
    this.gender = gender;
    this.password = password;
  }
  save() {
    return db.execute(
      "insert into admin (Full_name,Email,phone,Gender,Password) values (?,?,?,?,?)",
      [this.fullname, this.email, this.phone, this.gender, this.p],
    );
  }
  static checkadmin(username,email,Gender,password ){
    return db.execute("select *from admin where Full_name =? and Email=? and Gender=? and Password=?",
        [username,email,Gender,password]
    )
  }
}

module.exports = Admin;
