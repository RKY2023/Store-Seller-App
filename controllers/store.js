const Store = require("../models/store");
// const Comment = require("../models/comment");

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
  // console.log(req.body);
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
      // console.log(result);
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

exports.getComment = (req, res, next) => {
  const blogId = req.params;
  console.log(req.params);

  // const prodId = req.params.productId;
  // let enableComment = false;
  // let blogId = null;

  // enableComment = req.query.enableComment;
  // blogId = req.query.blogId;
  let BLOGS = [];
  Blog.findAll()
    .then((blogs) => {
      BLOGS = blogs;
    })
    .then(() => {
      Comment.findAll({ where: { blogId: blogId } })
        .then((comments) => {
          console.log(comments);
          return res.render("blog", {
            blogs: BLOGS,
            comments: comments,
            enableComment: true,
            blogId: blogId,
          });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
  // const editMode = req.query.enableComment;
  // console.log(editMode);
  // if (!editMode) {
  //   return res.redirect('/');
  // }
  // console.log(req.params);
  // const prodId = req.params.productId;
  // req.user.getProducts({ where: {id: prodId}})
  // // Product.findByPk(prodId)
  // .then(products => {
  //   const product = products[0];
  //   if( !product) {
  //     return res.redirect('/');
  //   }
  //   res.render('admin/edit-product', {
  //     pageTitle: 'Edit Product',
  //     path: '/admin/edit-product',
  //     editing: editMode,
  //     product: product
  //   });
  // }).catch(err => console.log(err));
};

exports.postComment = (req, res, next) => {
  const blogId = req.body.blogId;
  const comment = req.body.comment;
  const blogs = [];
  const comments = [];
  Comment.create({
    comment: comment,
    blogId: blogId,
  })
    .then((comment) => {
      res.redirect("/blog/comment/" + blogId);
    })
    .catch((err) => {
      console.log(err);
    });
  // console.log('postCOmment', req.blog);
  // const prodId = req.body.productId;
  // const updatedTitle = req.body.title;
  // const updatedImageUrl = req.body.imageUrl;
  // const updatedPrice = req.body.price;
  // const updatedDescription = req.body.description;
  // Product.findByPk(prodId).then(product => {
  //   product.title = updatedTitle;
  //   product.price = updatedPrice;
  //   product.imageUrl = updatedImageUrl;
  //   product.description = updatedDescription;
  //   return product.save();
  // })
  // .then(result => {
  //   console.log('Updated Product');
  //   res.redirect('/admin/products');
  // }).catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByPk(prodId)
    .then((product) => {
      return product.destroy();
    })
    .then((result) => {
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};

exports.getProducts = (req, res, next) => {
  req.user
    .getProducts()
    // Product.findAll()
    .then((products) => {
      res.render("admin/products", {
        prods: products,
        pageTitle: "Admin Products",
        path: "/admin/products",
      });
    })
    .catch((err) => console.log(err));
};
