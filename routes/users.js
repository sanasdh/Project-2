var express = require('express');
var router = express.Router();
var userCtrl = require("../controllers/users")

router.get('/', userCtrl.index)
router.post("/:id",userCtrl.create)
router.delete("/:id", userCtrl.deleteWishlist);

module.exports = router;
