const router = require("express").Router();
const favoriteEventsController = require("../../controllers/favoriteController");

// Matches with "/api/events"
router.route("/")
  .get(favoriteEventsController.findAll)
  .post(favoriteEventsController.create)


// Matches with "/api/events/:id"
router
  .route("/:eventName/:eventLocation/:eventDate/:eventTime")
  .get(favoriteEventsController.findAll)
  .delete(favoriteEventsController.remove);

module.exports = router;
