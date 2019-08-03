const router = require("express").Router();
const eventRoutes = require("./events");
const authorizeRoutes = require("./authorize")
const signupRoutes = require("./signup")
//const userRoutes = require("./user")
const loginRoutes = require("./login")



// event routes
router.use("/events", eventRoutes);
router.use("/authorize", authorizeRoutes)
router.use("/login", loginRoutes)
router.use("/signup", signupRoutes)
//router.use("/api/users", userRoutes)

// router.use("/authorize", authorizeRoutes)
module.exports = router;
