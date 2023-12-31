// Import mongoose
const mongoose = require('mongoose');

// Define the brand schema
const brandSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    // Add other brand-related fields as needed
  });

brandSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

brandSchema.set('toJSON', {
    virtuals: true,
});

exports.Brand = mongoose.model('Brand', brandSchema);