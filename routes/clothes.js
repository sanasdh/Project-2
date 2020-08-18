var express = require('express');
var router = express.Router();
var clothCtrl = require("../controllers/cloth")
/* GET home page. */
router.get('/', clothCtrl.index)
router.get("/search", clothCtrl.search)


// router.post('/clothes', isLoggedIn, clothCtrl.index);

// Insert this middleware for routes that require a logged in user
function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
module.exports = router;
