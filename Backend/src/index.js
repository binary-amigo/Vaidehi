const express = require("express");
const userRoute = require("../routes/user.route");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const shopRoute = require("../routes/shop.route");
const inputRoute = require("../routes/input.route");
require('dotenv').config(); 


//middlewares
app.use(express.json()); //middleware to allow express to parse json data
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes
app.use("/", userRoute);

//shop route
app.use('/shop', shopRoute);

//input route
app.use('/input', inputRoute);

mongoose
  .connect(
    process.env.MONGODB_URI,
  )
  .then(() => {
    console.log("Connected to MongoDB...");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })

  .catch((err) => console.error("Could not connect to MongoDB..."));