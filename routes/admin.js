const express = require ('express');
const path = require ('path');
const bodyParser = require ('body-parser');
const rootDirectory = require('../utilities/path');
const router = express.Router();
const products = [];


router.get("/add-product", function(req, res){
    res.render('add-product',{pageTitle: "Add New Product"});
    
    
});

router.post('/add-product', function(req, res){
    console.log(req.body.title);
    products.push({title: req.body.title});
    res.redirect('/');
})

module.exports = router;
