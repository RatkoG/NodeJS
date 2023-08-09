const express = require("express");
const path = require("path");
const rootDir = require("../utils/path");
const adminData = require("./admin")

const router = express.Router();

router.get("/",(req, res, next) => {
    const products = adminData.products;
    res.render("shop", {prods: products, docTitle: "Shop"});
   // next(); // Allows the request to continue to the next middleware in line.
})

module.exports = router;