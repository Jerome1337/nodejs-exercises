const express = require("express");
const fetch = require("node-fetch");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));

const getCarInfo = (id) => {
  return fetch(`http://localhost:3000/car/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((car) => {
      return car;
    })
    .catch((err) => {
      throw err;
    });
};

app.get("/", (req, res) => {
  fetch("http://localhost:3000/cars", {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((cars) => {
      // res.render("pages/home", { cars: cars });
      res.render("pages/home", { cars });
    })
    .catch((err) => {
      throw err;
    });
});

app.get("/car/:id", async (req, res) => {
  const car = await getCarInfo(req.params.id);

  res.render("pages/car", { car: car });
});

app.get("/create/car", (req, res) => {
  res.render("pages/create");
});

app.get("/update/car/:id", async (req, res) => {
  const car = await getCarInfo(req.params.id);

  res.render("pages/update", { car: car });
});

app.listen(4000, () => {
  console.info("Front-end with EJS running");
});
