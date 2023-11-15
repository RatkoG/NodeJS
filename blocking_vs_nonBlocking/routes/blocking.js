const express = require("express");
const router = express.Router();

router.get("/blocking", (req, res) => {
  const now = new Date().getTime();
  while (new Date().getTime() < now + 10000) {}
  res.send("Blocking function executed");
});

module.exports = router;
