const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    sparse: true // allows users without googleId (normal login)
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['Warehouse Manager', 'Delivery Staff', 'Admin', 'User'],
    required: true
  },
  picture: {
    type: String // profile photo from Google
  },
  password: {
    type: String // for normal login (not required for Google users)
  }
}, { timestamps: true });

// ✅ Allow same email with multiple roles
userSchema.index({ email: 1, role: 1 }, { unique: true });


const userModel = mongoose.model('userData', userSchema);

module.exports = userModel;
