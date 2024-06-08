const mongoose = require("mongoose");

const citySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter the city name!"],
    },
  },
  {
    timestamps: true,
  }
);

const city = mongoose.model("city", citySchema);

module.exports = city;