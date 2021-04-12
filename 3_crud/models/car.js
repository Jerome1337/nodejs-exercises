const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CarSchema = new Schema({
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
  door_number: {
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

const Car = mongoose.model("car", CarSchema);

module.exports = Car;
