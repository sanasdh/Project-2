const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var productSchema = new Schema({
  name: String,
  brand: String,
  product_api_url: String,
  product_type: String,
  price: String,
  id: Number,
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);