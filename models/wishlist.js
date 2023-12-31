// Import mongoose
const mongoose = require('mongoose');

// Define the wishlist schema
const wishlistSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    // Add other wishlist-related fields as needed
  });

wishlistSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

wishlistSchema.set('toJSON', {
    virtuals: true,
});

exports.Wishlist = mongoose.model('Wishlist', wishlistSchema);