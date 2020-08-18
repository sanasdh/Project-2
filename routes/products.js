var express = require('express');
var router = express.Router();
const request = require('request');
var productsCtrl = require("../controllers/products")

const rootURL = 'http://makeup-api.herokuapp.com/api/v1/products.json';

/* GET home page. */

router.get("/", productsCtrl.create)
router.get("/:id", productsCtrl.show)
module.exports = router;
