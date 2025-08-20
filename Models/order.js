const mongoose = require("mongoose");

const shipmentSchema = new mongoose.Schema(
  {
    shipmentId: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    trackingNumber: {
      type: String,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    status: {
      type: String,
      enum: ["Pending", "In Transit", "Delivered", "Cancelled",'Delayed'],
      default: "Pending"
    },
    shippedDate: {
      type: Date,
      required: true
    },
    expectedDate: {
      type: Date
    },
    deliveredDate: {
      type: Date
    },
    origin: {
      type: String,
      trim: true
    },
    destination: {
      type: String,
      required: true,
      trim: true
    },
    address: {
      type: String,
      required: true,
      trim: true
    },
    carrier: {
      type: String,
      required: true,
      trim: true
    },
    weight: {
      type: String, 
      trim: true
    },
    dimensions: {
      type: String, 
      trim: true
    },
    value: {
      type: Number,
      required: true,
      min: 0
    },
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    deliveryTime: {
      type: String, 
      trim: true
    },
    currentLocation: {
      type: String,
      trim: true
    },
    month: {
      type: String
    },
    year: {
      type: Number
    }
  },
  { timestamps: true }
);

shipmentSchema.pre("save", function (next) {
  if (this.shippedDate) {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    this.month = months[this.shippedDate.getMonth()];
    this.year = this.shippedDate.getFullYear();
  }
  next();
});

const Shipment = mongoose.model("Shipment", shipmentSchema);

module.exports = Shipment;
