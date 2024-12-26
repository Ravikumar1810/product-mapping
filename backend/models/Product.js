const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  supplierName: { type: String, required: true },
  standardizedName: { type: String, required: true },
});

module.exports = mongoose.model('Product', productSchema);
