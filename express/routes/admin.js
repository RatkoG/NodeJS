const express = require("express");
const rootDir = require("../utils/path");
const path = require("path");

const router = express.Router();

const products = [];

router.get("/add-product",(req, res, next) => {
    // console.log("In another middleware!");
    res.sendFile(path.join(rootDir, "views", "add_product.html"));
   // next(); // Allows the request to continue to the next middleware in line.
})

router.post("/add-product",(req, res, next) => {
    console.log(req.body); 
    products.push({title: req.body.title});
    res.redirect("/");
})

exports.routes = router;
exports.products = products;
