const express = require("express");
const router = express.Router();

const feedController = require("../controllers/feed");

// GET /feed/posts this will be handeled by feedController.getPosts
router.get("/posts", feedController.getPosts);

// POST /feed/post this will be handeled by feedController.createPost
router.post("/post", feedController.createPost);

module.exports = router;
