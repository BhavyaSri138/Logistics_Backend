const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema({
  shipmentId: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    enum: ['inbound', 'outbound'],
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  date: {
    type: Date,
    required: true
  },
  eta: {
    type: Date,
  },
  month: {
    type: String,
   
  },
  year: {
    type: Number,
  
  },
  status: {
    type: String,
    enum: ["Pending", "In Transit", "Out for Delivery", "Delivered"],
    default: 'Pending'
  },
  driverId: {
    type: String,
    default: 'null'
  },
  warehouseId: {
    type: String,

  },
  location: {
    type: String,   
    trim: true
  },
  destination: {
    street: { type: String, trim: true },
    city: { type: String, trim: true },
    state: { type: String, trim: true },
    pincode: { type: String, trim: true },
    country: { type: String, default: "India", trim: true }
  }

}, { timestamps: true });

shipmentSchema.pre('save', function (next) {
  if (this.date) {
    const d = new Date(this.date);
    const monthNames = [
      'January','February','March','April','May','June',
      'July','August','September','October','November','December'
    ];
    this.month = monthNames[d.getMonth()];
    this.year = d.getFullYear();
  }
  next();
});

const shipmentModel = mongoose.model('Shipment', shipmentSchema);
module.exports = shipmentModel;
