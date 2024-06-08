const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter the product name!"],
    },
    number: {
      type: Number,
      required: true,
      default: 0,
    },
    email: {
      type: String,
      required: true,
      default: 0,
    },
    gender: {
      type: String,
      required: false,
    },
    age : {
      type: Number,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model("user", userSchema);

module.exports = user;