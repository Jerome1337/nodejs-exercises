const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BikeSchema = new Schema({
  brand: {
    type: String,
  },
  model: {
    type: String,
  },
  year: {
    type: Number,
  },
  power: {
    type: Number,
  },
  type: {
    type: String,
  },
  price: {
    type: Number,
  },
  reserved: {
    type: Boolean,
    default: false,
  },
});

const Bike = mongoose.model("bike", BikeSchema);

module.exports = Bike;
