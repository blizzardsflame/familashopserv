// Import mongoose
const mongoose = require('mongoose');

// Define the subcategory schema
const subcategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    // Add other subcategory-related fields as needed
  });


// Create the subcategory model
exports.Subcategory = mongoose.model('Subcategory', subcategorySchema);
