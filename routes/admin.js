const express = require ('express');
const path = require ('path');
const bodyParser = require ('body-parser');
const rootDirectory = require('../utilities/path');
const productsController = require('../controllers/products');
const router = express.Router();
//const products = [];


router.get("/add-product", productsController.getAddProductsPage);

router.post('/add-product', productsController.postAddProducts);  



module.exports = router;
//exports.router = router;
//exports.products = products;
