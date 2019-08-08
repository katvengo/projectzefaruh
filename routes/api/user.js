const router = require("express").Router();
const userController = require("../../controllers/userController");
var isAuthenticated = require("../../config/middleware/isAuthenticated");

// grab the User model from the models folder, the sequelize
// index.js file takes care of the exporting for us and the 
// syntaxt below is called destructuring, its an es6 feature
const { User } = require("../../models/user");

// Matches with "/api/user
router.route("/")
  .get(userController.findAll)


// Matches with "/api/user/:username"
router
  .route("/:username", isAuthenticated)
  .get(userController.findOne)
//   .delete(userController.remove);

// copied
/* Me Route - get the currently logged in user
========================================================= */
router.get('/me', (req, res) => {
  if (req.user) {
    return res.send(req.user);
  }
  res.status(404).send(
    { errors: [{ message: 'missing auth token' }] }
  );
});

module.exports = router;
