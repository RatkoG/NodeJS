const express = require("express");
const router = express.Router();

router.get("/nonblocking", async (req, res) => {
  await new Promise((resolve) => setTimeout(resolve, 10000));

  res.send("Non-blocking function executed");
});

module.exports = router;
