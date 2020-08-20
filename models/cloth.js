const mongoose = require('mongoose');
const Schema = mongoose.Schema;



var clothSchema = new Schema({
  name: String,
  email: String,
  avatar: String,
  googleId: String,
  products: [{type: Schema.Types.ObjectId, ref: 'Product'}]
}, {
  timestamps: true
});

module.exports = mongoose.model('Cloth', clothSchema);