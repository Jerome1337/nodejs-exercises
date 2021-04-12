const express = require("express");
const fetch = require("node-fetch");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  fetch("http://localhost:3000/", {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      res.render("home", { animals: json });
    })
    .catch((err) => {
      throw err;
    });
});

app.get("/add", (req, res) => {
  res.render("addAnimal");
});

app.listen(4000, () => {
  console.log("FRONT IS WORKING ON 4000");
});
