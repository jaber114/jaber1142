var mongoose = require("mongoose");
let Car = new mongoose.Schema(
  {
    Car_brand: {
      type: String,
    },
    Car_price: {
      type: Number,
    },
  },
  {
    collection: "cars",
  }
);
module.exports = mongoose.model("cars", Car);
