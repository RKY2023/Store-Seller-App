const Store = require("../models/store");

exports.getPage = (req, res, next) => {
  Store.findAll()
    .then((items) => {
      res.render("store", {
        items: items,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postAddItem = (req, res, next) => {
  const name = req.body.name;
  const description = req.body.description;
  const price = req.body.price;
  const quantity = req.body.quantity;
  Store.create({
    name: name,
    description: description,
    price: price,
    quantity: quantity,
  })
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.postBuyItem = (req, res, next) => {
  console.log(req.body);
  const buy = req.body.buy;
  const itemId = req.body.itemId;
  let newQuantity = 0;
  Store.findByPk(itemId)
    .then((item) => {
      newQuantity = item.quantity - buy;
      console.log(newQuantity);
    })
    .then(() => {
      console.log('sdasd');
      Store.update({ quantity: newQuantity }, { where: { id: itemId } })
      .then((result) => {
        console.log('updated');
        res.redirect("/");
      })
      .catch((err) => console.log(err));
    })
    .then(() => {
      
    })
    .catch((err) => console.log(err)); 
};
