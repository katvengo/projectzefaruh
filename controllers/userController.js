var db = require("../models");

module.exports = {

    create: function (req, res) {
        db.User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            image: req.body.image,
            interests: req.body.interests,
          }).then(function() {
            res.redirect(307, "/api/login");
          }).catch(function(err) {
            console.log(err);
            res.json(err);
            // res.status(422).json(err.errors[0].message);
          });
    },

    findAll: function (req, res) {
        db.User.findAll({}).then(function (dbUsers) {
            return res.json(dbUsers)
        })
    },

    findOne: function(req, res) {
    var user = req.params.username
       db.User.findOne({
        where: {
          username: req.params.username
      }
    }).then(function (dbUsers) {
      return res.json(dbUsers)
     }).catch(next)
    },

    //remove: function(req, res) {}

}