// Import mongoose
const mongoose = require('mongoose');

// Define the dynamic collection schema
const productCollectionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    // Add other dynamic collection-related fields as needed
  });



exports.ProductCollection = mongoose.model('ProductCollection', productCollectionSchema);
