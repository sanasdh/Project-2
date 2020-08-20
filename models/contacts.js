const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var contactSchema = new Schema(
  {
    name: String,
    email: String,
    content: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
