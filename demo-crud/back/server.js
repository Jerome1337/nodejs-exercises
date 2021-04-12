const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const createRoutes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/demo-crud-2");

createRoutes(app);

app.listen(3000, () => {
  console.log("Server is working");
});
