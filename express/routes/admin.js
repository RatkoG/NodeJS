const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/add-product",(req, res, next) => {
    // console.log("In another middleware!");
    res.sendFile(path.join(__dirname, "../", "views", "add_product.html"));
   // next(); // Allows the request to continue to the next middleware in line.
})

router.post("/add-product",(req, res, next) => {
    console.log(req.body);
    res.redirect("/");
})

module.exports = router;