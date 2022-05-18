const express = require("express");

const router = express.Router();

//defualt route
router.route("/").get((req, res) => {
  res.send("sasti cheeze");
});

module.exports = router;
