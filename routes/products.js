var express = require('express');
var router = express.Router();
var productsCtrl = require("../controllers/products")

/* GET home page. */

router.get("/", productsCtrl.create)
router.get("/:id", productsCtrl.show)
module.exports = router;
