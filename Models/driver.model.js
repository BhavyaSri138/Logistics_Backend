const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
  driverId: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  driverName: {
    type: String,
    required: true,
    trim: true
  },
  vehicleNo: {
    type: String,
    required: true,
    trim: true
  },
  licenseNo: {
    type: String,
    required: true,
    trim: true
  },
  contactNo: {
    type: String,
    required: true,
    
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  assignedWarehouse: {
    type: String,
    required: true,
    trim: true
  }
}, { timestamps: true });

const driverModel = mongoose.model('Driver', driverSchema);
module.exports = driverModel;
