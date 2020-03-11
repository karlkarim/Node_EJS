const express = require ('express');
const path = require ('path');
const rootDirectory = require('../utilities/path');
const productsController = require('../controllers/products');
const adminData = require('./admin');
const router = express.Router();

router.get("/", productsController.getProducts);
module.exports = router;  