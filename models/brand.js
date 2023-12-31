// Import mongoose
const mongoose = require('mongoose');

// Define the brand schema
const brandSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    // Add other brand-related fields as needed
  });

exports.Brand = mongoose.model('Brand', brandSchema);