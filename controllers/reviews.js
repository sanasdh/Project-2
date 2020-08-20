var Product = require('../models/product');

module.exports = {
  create
};

function create(req, res) {
  console.log("in review 1");

    Product.findById({"_id":req.params.id}, function(err, product) {
        product.reviews.push(req.body);
        console.log("in review");
        product.save(function(err) {
      res.redirect(`/products/${product._id}`);
    });
  });
}