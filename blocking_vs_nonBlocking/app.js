const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const blockingRoutes = require("./routes/blocking");
const nonBlockingRoutes = require("./routes/nonBlocking");

app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(blockingRoutes);
app.use(nonBlockingRoutes);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
