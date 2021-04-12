const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AnimalSchema = new Schema({
  name: {
    type: String,
  },
  country: {
    type: String,
  },
});

const Animal = mongoose.model("animal", AnimalSchema);

module.exports = Animal;
