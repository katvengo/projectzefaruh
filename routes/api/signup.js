const router = require("express").Router();
const eventsController = require("../../controllers/userController");

// Matches with "/api/signup"
router.route("/")
  .get(eventsController.findAll)
  .post(eventsController.create)


// Matches with "/api/user/:id"
// router
//   .route("/:id")
//   .get(eventsController.findById)
//   .delete(eventsController.remove);

module.exports = router;
