const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const sequelize = require("./util/database");
const Store = require("./models/store");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const storeRoutes = require("./routes/store");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(storeRoutes);

sequelize
  // .sync({ force: true})
  .sync()
  .then((user) => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));