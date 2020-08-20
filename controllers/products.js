const request = require("request");
let Cloth = require("../models/cloth");
let Product = require("../models/product");
const rootURL = "http://makeup-api.herokuapp.com/api/v1/products.json";

async function create(req, res, next) {
  let brand = req.query.brand;
  let product = req.query.product;

  console.log("product", product);
  console.log("brand", brand);

  console.log(Array.isArray(brand));
  if (Array.isArray(brand)) {
    console.log("in if brand");
  } else {
    brand = [brand];
  }
  console.log("after brand", brand);
  console.log(Array.isArray(product));
  if (Array.isArray(product)) {
    console.log(Array.isArray(product));
  } else {
    product = [product];
  }
  console.log("after product", product);

  const productData = await Product.find({});
  let a = 0,
    c = 0;
  res.render("clothes/new", {
    productData,
    user: req.user,
    newBrand: brand,
    newProduct: product,
    a,
    c,
  });
}
function show(req, res) {
  Product.find({ _id: req.params.id }, function (err, product) {
    Cloth.findById(req.user, function (err, cloth) {
      res.render("clothes/show", {
        user: req.user,
        product,
        cloth,
      });
    });
  });
}

module.exports = {
  create: create,
  show: show,
};
