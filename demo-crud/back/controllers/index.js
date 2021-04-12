const Animal = require("../models");

const createAnimal = (request, response, next) => {
  const body = request.body;

  Animal.create(body)
    .then((animal) => {
      response.send(animal);
    })
    .catch(next);
};

const getAll = (request, response, next) => {
  Animal.find()
    .then((animals) => response.send(animals))
    .catch(next);
};

const getByID = (request, response, next) => {
  const id = request.params.id;

  Animal.findById(id)
    .then((animal) => {
      response.send(animal);
    })
    .catch(next);
};

module.exports = {
  createAnimal,
  getAll,
  getByID,
};
