
const mongoose = require("mongoose");

const unifiedSchema = new mongoose.Schema(
  {
    sku: {
      type: String,
      trim: true
    },
    name: {
      type: String,
      trim: true
    },
    category: {
      type: String,
      trim: true
    },
    quantity: {
      type: Number,
      min: 0
    },
    stock: {
      type: Number,
      min: 0
    },
    location: {
      type: String,
      trim: true
    },
    price: {
      type: Number,
      min: 0
    },
    status: {
      type: String,
      enum: ["Pending", "In Transit", "Out for Delivery", "Delivered", "Cancelled", "Delayed"],
      trim: true
    },
    origin: {
      type: String,
      trim: true
    },
    destination: {
      type: String,
      trim: true
    },
    eta: {
      type: Date
    },
    carrier: {
      type: String,
      trim: true
    }
  },
  { timestamps: true }
);

const shipments = mongoose.model("shipments", unifiedSchema);

module.exports = shipments;
