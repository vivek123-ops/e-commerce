const db = require("../utility/database");

class Product {
  constructor(ProductName, Price, Category, Describtion, imageUrl, userId) {
    if (
      !ProductName ||
      !Price ||
      !Category ||
      !Describtion ||
      !imageUrl ||
      !userId
    ) {
      throw Error("please enter all feild im product");
    }
    this.ProductName = ProductName;
    this.Price = Price;
    this.Category = Category;
    this.Describtion = Describtion;
    this.imageUrl = imageUrl;
    this.userId = userId;
    this.userId = userId;
  }
  save() {
    return db.execute(
      "insert into Product (ProductName,price,category,describtion,url,user_id) values (?,?,?,?,?,?)",
      [
        this.ProductName,
        this.Price,
        this.Category,
        this.Describtion,
        this.imageUrl,
        this.userId,
      ],
    );
  }
}

module.exports = Product;
