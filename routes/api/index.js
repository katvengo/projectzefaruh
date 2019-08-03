const router = require("express").Router();
const eventRoutes = require("./events");
const authorizeRoutes = require("./authorize")

// event routes
router.use("/events", eventRoutes);
router.use("/authorize", authorizeRoutes)

// router.use("/authorize", authorizeRoutes)
module.exports = router;
