const express = require("express");

const router = express.Router();

router.get("/",(req, res, next) => {
    // console.log("In the middleware!");
    res.send("<h1>Hello from Express!</h1>");
   // next(); // Allows the request to continue to the next middleware in line.
})

module.exports = router;