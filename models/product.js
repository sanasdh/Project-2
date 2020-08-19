const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const reviewSchema = new Schema({
  content: String,
  rating: {type: Number, min: 1, max: 5, default: 5}
}, {
  timestamps: true
});

var productSchema = new Schema({
  id: Number,
  brand: String,
  name: String,
  price: Number,
  currency: String,
  image_link: String,
  product_link: String,
  website_link: String,
  description: String,
  rating: Number,
  category: String,
  product_type: String,
  tag_list: Array,
  created_at: Date,
  updated_at: Date,
  product_api_url: String,
  api_featured_image: String,
  product_colors: Array,
  reviews: [reviewSchema],
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);