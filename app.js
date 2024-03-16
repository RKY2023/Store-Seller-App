const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

// const errorController = require("./controllers/error");
const sequelize = require("./util/database");
const Store = require("./models/store");
// const Comment = require("./models/comment");
// const Cart = require("./models/cart");
// const CartItem = require("./models/cart-item");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const storeRoutes = require("./routes/store");
// const shopRoutes = require("./routes/shop");
// const userRoutes = require("./routes/user");
// const expenseRoutes = require("./routes/expense");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.use((req, res, next) => {
//   User.findByPk(1).then((user) => {
//     req.user = user;
//     next();
//   }).catch((err) => console.log(err));
// });

// app.use("/admin", adminRoutes);
app.use(storeRoutes);
// app.use(userRoutes);
// app.use(expenseRoutes);

// app.use(errorController.get404);

// Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
// Blog.hasMany(Comment);
// User.hasOne(Cart);
// Cart.belongsTo(User);
// Cart.belongsToMany(Product, { through: CartItem });
// Product.belongsToMany(Cart, { through: CartItem });

sequelize
  // .sync({ force: true}) // to force run
  .sync()
  // .then((result) => {
  //   return User.findByPk(1);
  //   // console.log(result);
  // })
  // .then((user) => {
  //   if (!user) {
  //     return User.create({
  //       name: "Rky",
  //       email: "test@test.com",
  //       phoneNo: "543534534",
  //     });
  //   }
  //   // return Promise.resolve(user); // then wrap used in promise itself.
  //   return user;
  // })
  // .then((user) => {
  //   // console.log(user);
  //   return user.createCart();
  // })
  .then((user) => {
    // console.log(user);
    app.listen(3000);
  })
  .catch((err) => console.log(err));
// sequelize
//   // .sync({ force: true}) // to force run
//   .sync()
//   .then((result) => {
//     return User.findByPk(1);
//     // console.log(result);
//   })
//   .then((user) => {
//     if (!user) {
//       return User.create({
//         name: "Rky",
//         email: "test@test.com",
//         phoneNo: "543534534",
//       });
//     }
//     // return Promise.resolve(user); // then wrap used in promise itself.
//     return user;
//   })
//   .then((user) => {
//     // console.log(user);
//     return user.createCart();
//   })
//   .then((user) => {
//     // console.log(user);
//     app.listen(3000);
//   })
//   .catch((err) => console.log(err));
  // app.listen(3000);