const createBikeRoutes = (app) => {
  app.get("/bikes", () => {});

  app.post("/bike", () => {});

  app.get("/bike/:id", () => {});

  app.put("/bike/:id", () => {});

  app.delete("/bike/:id", () => {});
};

module.exports = createBikeRoutes;
