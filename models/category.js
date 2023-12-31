// Import mongoose
const mongoose = require('mongoose');

// Define the category schema
const categorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    icon: {
      type: String,
    },
    color: { 
        type: String,
    }
    // Add other category-related fields as needed
  });
  
exports.Category = mongoose.model('Category', categorySchema);

