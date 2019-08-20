const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
//var db = require("../models");
//const isAuthenticated = require("../config/middleware/isAuthenticated")

// API Routes
router.use("/api", apiRoutes);

router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
