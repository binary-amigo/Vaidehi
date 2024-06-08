const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema(
  {
    shopName: {
      type: String,
      required: [true, "Please enter the shop name!"],
    },
    number: {
      type: Number,
      required: true,
      default: 0,
    },
    ownerName: {
        type: String,
        required: true,
        default: 0,
    },
    email: {
      type: String,
      required: true,
      default: 0,
    },
    station: {
      type: String,
      required: true,
    },
    platform : {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const shop = mongoose.model("shop", shopSchema);

module.exports = shop;