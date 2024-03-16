const path = require('path');

const express = require('express');

const storeController = require('../controllers/store');

const router = express.Router();

// /admin/add-product => GET
router.get('/', storeController.getPage);

router.post('/add', storeController.postAddItem);

router.post('/buy', storeController.postBuyItem);

// router.get('/blog/comment/:blogId', blogController.getComment);

// router.post('/blog/comment/:blogId', blogController.postComment);


// // /admin/products => GET
// router.get('/products', adminController.getProducts);

// // /admin/add-product => POST
// router.post('/add-product', adminController.postAddProduct);

// router.get('/edit-product/:productId', adminController.getEditProduct);

// router.post('/edit-product', adminController.postEditProduct);

// router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;
