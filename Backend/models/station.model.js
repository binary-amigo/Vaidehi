const mongoose = require("mongoose");

const stationSchema = new mongoose.Schema(
  {
    cityId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "city",
      required: [true, "Please enter the City ID!"],
    }
    ,
    stationName: {
      type: String,
      required: [true, "Please enter the Station name!"],
    },
    seats: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

const station = mongoose.model("station", stationSchema);

module.exports = station;