// Import mongoose
const mongoose = require('mongoose');

// Define the wishlist schema
const wishlistSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    // Add other wishlist-related fields as needed
  });


exports.Wishlist = mongoose.model('Wishlist', wishlistSchema);