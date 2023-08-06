const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/",(req, res, next) => {
    // console.log("In the middleware!");
    // Loading the html file.
    // __dirname is a global variable that holds the absolute path to the project folder.
    res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
   // next(); // Allows the request to continue to the next middleware in line.
})

module.exports = router;