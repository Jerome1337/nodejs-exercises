// const controllers = require("../controllers");

const { createAnimal, getAll, getByID } = require("../controllers");

const createRoutes = (app) => {
  // creation des routes
  app.get("/", getAll);

  app.get("/:id", getByID);

  // Pareil => app.post("/", (req, res, next) => createAnimal(req, res, next));
  app.post("/", createAnimal);
};

module.exports = createRoutes;
