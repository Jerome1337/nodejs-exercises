const createCarRoutes = require("./car");
const createBikeRoutes = require("./bike");

const createRoutes = (app) => {
  createCarRoutes(app);

  createBikeRoutes(app);
};

module.exports = createRoutes;
