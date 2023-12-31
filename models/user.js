// Import mongoose
const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
      name: {
        type: String,
        required: true,
      },
        email: {
            type: String,
            required: true,
            unique: true
        },
        passwordHash: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        role: { type: String, enum: ['client', 'livreur', 'admin', 'vendeur'], required: true },
        street: {
            type: String,
            default: ''
        },
        apartment: {
            type: String,
            default: ''
        },
        zip :{
            type: String,
            default: ''
        },
        city: {
            type: String,
            default: ''
        },
        country: {
            type: String,
            default: ''
        }

    // Add other user-related fields as needed
  });

userSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

userSchema.set('toJSON', {
    virtuals: true,
});

exports.User = mongoose.model('User', userSchema);
