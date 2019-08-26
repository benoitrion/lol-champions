const express = require("express");
const router = express.Router();
const foo = require("../data/champions.json");

router.get("/", function(req, res) {
  res.send(foo);
});

// • Export router to use it on other modules
module.exports = router;
