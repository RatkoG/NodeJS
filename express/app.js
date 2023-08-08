const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// Middleware function.
// app.use will be executed for every incoming request.
// next artument which is a function is allowing the request to travel to the next middleware.
// app.use("/",(req, res, next) => {
//     // console.log("This always runs!"); 
//     next(); // Allows the request to continue to the next middleware in line.
// })


// Tt will parse the body of the request and call next() after it is done.
app.use(bodyParser.urlencoded({extended: false}));
// this is a middleware function that will serve static files.  
app.use(express.static(path.join(__dirname, "public")));

// This is valid middleware function. Keep in mind the order of the middleware functions is important.
// FIltering routes /admin is a filter. so all rountes starting with /admin will go to adminRoutes
app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // we are in the root here we don't have to go up one level.
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
