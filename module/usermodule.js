const db = require("../utility/database");

class Users {
  constructor(username, email, phone, gender, password) {
    if (!username || !email || !phone || !gender || !password) {
      throw new Error("All fields are required");
    }

    this.username = username;
    this.email = email;
    this.phone = phone;
    this.gender = gender;
    this.password = password;
  }

  save() {
    return db.execute(
      "INSERT INTO users (Full_name, Email, Phone, Gender, Password) VALUES (?,?,?,?,?)",
      [this.username, this.email, this.phone, this.gender, this.password]
    );
  }

  static finduser(username, email, gender, password) {
    return db.execute(
      "SELECT * FROM users WHERE Full_name=? AND Email=? AND Gender=? AND Password=?",
      [username, email, gender, password]
    );
  }
}

module.exports = Users;