const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const feedRoutes = require("./routes/feed");

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form> this is for forms remember
app.use(bodyParser.json()); // application/json this is found in the header of the request

// CORS error handling
// Adding headers to every response
app.use((req, res, next) => {
  // Allow access to any client
  res.setHeader("Access-Control-Allow-Origin", "*");
  // Allow these headers
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  // Allow these methods
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  next();
});

app.use("/feed", feedRoutes);

app.listen(8000);
