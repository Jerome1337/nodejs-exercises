const { Bike } = require("../models");

const getBikes = (req, res, next) => {};

const getBikeByID = (req, res, next) => {};

const createBike = (req, res, next) => {
  Bike.create(req.body)
    .then((car) => {
      res.send(car);
    })
    .catch(next);
};

const updateBikeByID = (req, res, next) => {};

const deleteBikeByID = (req, res, next) => {
  Bike.findByIdAndDelete(req.params.id)
    .then(() => {
      res.send("deleted");
    })
    .catch(next);
};

module.exports = {
  getBikes,
  getBikeByID,
  createBike,
  updateBikeByID,
  deleteBikeByID,
};
