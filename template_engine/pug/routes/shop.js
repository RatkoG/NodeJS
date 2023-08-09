const express = require("express");
const path = require("path");
const rootDir = require("../utils/path");
const adminData = require("./admin")

const router = express.Router();

router.get("/",(req, res, next) => {
    console.log("shop.js",adminData.products)
    // console.log("In the middleware!");
    // Loading the html file.
    // __dirname is a global variable that holds the absolute path to the project folder.
    res.sendFile(path.join(rootDir, "views", "shop.html"));
   // next(); // Allows the request to continue to the next middleware in line.
})

module.exports = router;