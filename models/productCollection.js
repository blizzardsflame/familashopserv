// Import mongoose
const mongoose = require('mongoose');

// Define the dynamic collection schema
const productCollectionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    // Add other dynamic collection-related fields as needed
  });


productCollectionSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

productCollectionSchema.set('toJSON', {
    virtuals: true,
});

exports.ProductCollection = mongoose.model('ProductCollection', productCollectionSchema);
