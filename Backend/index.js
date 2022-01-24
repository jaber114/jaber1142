const express = require("express");
const car = require("./Models/car");
var mongoose = require("mongoose");
const port = 8000;
const bodyparser = require("body-parser");
const path = require("path");
const cors = require("cors");
const app = express();
var mongoDB = "mongodb://localhost:27017/four_wheels";
mongoose.connect(mongoDB, { useNewUrlParser: true });
app.use(cors());
app.use(bodyparser.json());
app.use(express.json());
app.use(
  bodyparser.urlencoded({
    extended: false,
  })
);
app.post("/login", async (req, res) => {
  console.log(req.query.cartype, req.query.carprice);
  const car1 = new car({
    Car_brand: req.query.cartype,
    Car_price: req.query.carpricestart,
  });
  car1.save().then(console.log("saved car"));
});
app.get("/register", async (req, res) => {
  console.log(console.log(req.body.type1, req.body.type));
});
app.listen(port, () => {
  console.log("port started at ", port);
});
