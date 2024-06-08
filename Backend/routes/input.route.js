const express = require("express");
const router = express.Router();
const { getCities, addCity, getStation, addStation,getSeats } = require("../controllers/input.controller");

//GET Routes
router.get("/cities", getCities);
router.get("/stations", getStation);
router.get("/seats",getSeats)

//POST Routes
router.post("/cities", addCity);
router.post("/stations", addStation);


//PUT Routes
// router.put("/:id", updateProduct);

// //DELETE Routes
// router.delete(":id", deleteProduct);

module.exports = router;