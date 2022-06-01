import * as models from "./models";
const mongoose = require("mongoose");

const dbURI = "mongodb://localhost:27017/";

mongoose
  .connect(dbURI)
  .then((res) => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

export default models;
