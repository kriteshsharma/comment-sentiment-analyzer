const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("link_form", { title: "Facebook" });
});
module.exports = router;
