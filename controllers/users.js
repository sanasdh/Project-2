let Cloth = require("../models/cloth")
let Product = require("../models/product");

function index(req, res, next) {
  Cloth.find({}).populate("products").exec(function (err, userInfo1) {
    console.log("userInfo1", userInfo1);
  })
  Cloth.find({"_id":req.user.id}).populate("products").exec(function (err, userInfo) {
    console.log("userInfo", userInfo);
    res.render('profile/index', {
      user: req.user,
      userInfo
    });
  });
}

function create(req, res) {
  console.log("in cloth");
  console.log("req.user.id", req.user.id);
  console.log("req.user", req.user);
  Cloth.findById({"_id":req.user.id}, function (err, cloth) {
    console.log("in cloth 2");
    console.log("req.user.id", req.user.id);
    console.log("req.user", req.user);
    console.log("cloth", cloth);
    if (!(cloth.products.includes(req.params.id))) {
      cloth.products.unshift(req.params.id)
    }
    cloth.save(function (err) {
      //  console.log("cloth", cloth);
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
    })
  })
};

function deleteWishlist(req, res) {
  Cloth.findById(req.user.id, function (err, cloth) {
    let count =0;
    const myArray = Object.values(cloth.products);
    Array.isArray(cloth.products)
    console.log("*********************************************");

    console.log("cloth.products", cloth.products);
    console.log("typeof cloth.products", typeof cloth.products);

    console.log("typeof req.params.id", typeof req.params.id);
    console.log("req.params.id",  req.params.id);


    console.log("typeof req.user.id", typeof req.user.id);
    console.log("req.user.id",  req.user.id);

    console.log("type myArray", typeof myArray);
    console.log("myArray", myArray);

    console.log("type myArray[0]", typeof myArray[0]);
    console.log("myArray[0]", myArray[0]);

    for(let k in cloth.products){
      
      if(cloth.products[k]==req.params.id){
        break;
      }
      count++;
    }
    console.log("count", count);
    cloth.products.splice(count, 1);
    console.log("cloth.products", cloth.products);

    myArray.splice(count, 1);
    console.log("myArray", myArray);
    console.log("*********************************************");
    cloth.save(function (err) {
      //  console.log("cloth", cloth);
      if (err) return next(err);
    res.redirect("/users")
    })
  })
}
module.exports = {
  index: index,
  create,
  deleteWishlist
}