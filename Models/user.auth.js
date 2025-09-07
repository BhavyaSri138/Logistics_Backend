const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const authSchema = new mongoose.Schema({
  googleId: {
    type: String,
    sparse: true // allow null for normal logins
  },
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 100
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true
  },
  password: {
    type: String,
    minlength: 8
    // ❌ not required because Google users don’t have passwords
  },
  role: {
    type: String,
    enum: ['Delivery Staff', 'Warehouse Manager', 'Admin', 'User'],
    required: true
  },
  picture: {
    type: String // Google profile picture
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Hash password before saving (only for local users)
authSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password') || !this.password) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// Compare password
authSchema.methods.comparePassword = async function (canditatePassword) {
  if (!this.password) return false; // Google users don’t have password
  return await bcrypt.compare(canditatePassword, this.password);
};

// Generate JWT
authSchema.methods.generateAuthToken = function (jwt) {
  return jwt.sign(
    { id: this._id, role: this.employment },
    process.env.JWT_SECRET || 'this_is_secret',
    { expiresIn: '1h' }
  );
};

const authModel = mongoose.model('authentication', authSchema);
module.exports = authModel;
