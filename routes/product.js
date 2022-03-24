var express = require('express');
var router = express.Router();
var productsController = require('../controllers/product');
router.get('/', productsController.getproducts);
router.post('/', productsController.createproduct);
module.exports = router;
