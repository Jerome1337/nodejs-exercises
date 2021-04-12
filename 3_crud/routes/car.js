const {
  getCars,
  getCarByID,
  createCar,
  updateCarByID,
  deleteCarByID,
} = require("../controllers");

const createCarRoutes = (app) => {
  app.get("/cars", getCars);

  app.post("/car", createCar);

  app.get("/car/:id", getCarByID);

  app.put("/car/:id", updateCarByID);

  app.delete("/car/:id", deleteCarByID);
};

module.exports = createCarRoutes;
