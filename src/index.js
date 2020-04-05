const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

import { URL_MONGO } from "./config/config";

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

console.log(URL_MONGO.url);

// Connecting to the database
mongoose
  .connect(URL_MONGO.url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

// define a simple route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Sakura CardCaptor API.",
  });
});

require("./routes")(app);

// listen for requests
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
