const path = require('path');

const express = require('express');

const storeController = require('../controllers/store');

const router = express.Router();

router.get('/', storeController.getPage);

router.post('/add', storeController.postAddItem);

router.post('/buy', storeController.postBuyItem);

module.exports = router;