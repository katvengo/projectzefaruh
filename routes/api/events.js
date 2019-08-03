const router = require("express").Router();
const eventsController = require("../../controllers/controller");

// Matches with "/api/events"
router.route("/")
  .get(eventsController.findAll)
  .post(eventsController.create)


// Matches with "/api/events/:id"
router
  .route("/:id")
  .get(eventsController.findById)
  .delete(eventsController.remove);

module.exports = router;
