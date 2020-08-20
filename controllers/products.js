const request = require("request");
let Cloth = require("../models/cloth");
let Product = require("../models/product");
const rootURL = "http://makeup-api.herokuapp.com/api/v1/products.json";

async function create(req, res, next) {
  let modelQuery = req.query.name
    ? { name: new RegExp(req.query.name, "i") }
    : {};
  // Default to sorting by name
  let sortKey = req.query.sort || "name";

  let brand = req.query.brand;
  console.log(Array.isArray(brand));
  if (Array.isArray(brand)) {
    return brand;
  } else {
    brand = [brand];
  }
  console.log("after brand", brand);
  let product = req.query.product;
  if (Array.isArray(product)) {
    return product;
  } else {
    product = [product];
  }
  const productData = await Product.find({});
  let a = 0,
    c = 0;
  Cloth.find(modelQuery)
    .sort(sortKey)
    .exec(function (err) {
      if (err) return next(err);
      console.log("product", product);
      console.log("brand", brand);
      res.render("clothes/new", {
        productData,
        user: req.user,
        name: req.query.name,
        sortKey,
        newBrand: brand,
        newProduct: product,
        a,
        c,
      });
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
