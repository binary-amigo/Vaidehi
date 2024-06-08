const express = require("express");
// const Product = require("../models/product.model");
const router = express.Router();

const {
  loginUser,
  signupUser,
} = require("../controllers/user.controller");

//GET Routes
// router.get("/", getProducts);
// router.get("/:id", getProduct);

//POST Routes
router.post("/login", loginUser);
router.post("/signup", signupUser);

//PUT Routes
// router.put("/:id", updateProduct);

// //DELETE Routes
// router.delete(":id", deleteProduct);

module.exports = router;