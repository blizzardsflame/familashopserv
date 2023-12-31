// Import mongoose
const mongoose = require('mongoose');


// Define the product schema
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    richDescription: { type: String, default: '' },
    image: { type: String, default: '' },
    images: [{ type: String}],
    price: { type: Number, defailt: 0 },
    countInStock: { type: Number, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    subcategory: { type: mongoose.Schema.Types.ObjectId, ref: 'Subcategory', default:'' },
    brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand', required: true },
    // Add other product-related fields as needed
    rating: {
      type: Number,
      default: 0,
    },
    numReviews: {
        type: Number,
        default: 0,
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
  });



productSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

productSchema.set('toJSON', {
    virtuals: true,
});

// Create and export the mongoose models
exports.Product = mongoose.model('Product', productSchema);