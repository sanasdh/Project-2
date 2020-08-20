let Cloth = require("../models/cloth")
let Product = require("../models/product");

function index(req, res, next) {
  Cloth.findById(req.user.id).populate("products").exec(function(err, userInfo){
  console.log("userInfo", userInfo)
      res.render('profile/index', {
        user: req.user,
        userInfo 
    });
    });
}

  function create(req, res) {
 
    Cloth.findById(req.user.id, function (err, cloth) {
      if(!(cloth.products.includes(req.params.id))){
      cloth.products.unshift(req.params.id)
      }
      cloth.save(function(err){
     console.log("cloth", cloth);
    if (err) return next(err);

    // console.log("theId", theId);    
    // console.log("req.params.id", req.params._id);
    // console.log("req.params.id", req.params.id);
    // console.log("req.params", req.params);        
    // console.log("Product(req.body)._id",  Product(req.body)._id);    
    // console.log("req.body", req.body);    
    // console.log("Product(req.body)", Product(req.body));
    res.redirect("/users")
    // res.render('profile/index', {
    //   user: req.user,
    //   name: req.query.name,
    //   sortKey,
      

    // });
  
})
})
};

module.exports = {
  index: index,
  create,
}