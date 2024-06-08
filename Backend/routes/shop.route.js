const express = require("express");
// const Product = require("../models/product.model");
const router = express.Router();

const {
  loginShop,
  signupShop,
} = require("../controllers/shop.controller");

//GET Routes
// router.get("/", getProducts);
// router.get("/:id", getProduct);

//POST Routes
router.post("/login", loginShop);
router.post("/signup", signupShop);

//PUT Routes
// router.put("/:id", updateProduct);

// //DELETE Routes
// router.delete(":id", deleteProduct);

module.exports = router;