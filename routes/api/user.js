const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user
router.route("/")
  .get(userController.findAll)


// Matches with "/api/user/:id"
router
  .route("/:user")
  .get(userController.findById)
//   .delete(userController.remove);

module.exports = router;
