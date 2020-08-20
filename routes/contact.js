var express = require("express");
var router = express.Router();
var contactsCtrls = require("../controllers/contacts");
/* GET home page. */

router.get("/", contactsCtrls.index);
router.post("/", contactsCtrls.create);

module.exports = router;
