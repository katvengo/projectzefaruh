var db = require("../models");

module.exports = {

    create: function (req, res) {
        db.User.create({
            email: req.body.email,
            password: req.body.password
          }).then(function() {
            res.redirect(307, "/api/login");
          }).catch(function(err) {
            console.log(err);
            res.json(err);
            // res.status(422).json(err.errors[0].message);
          });
    },

    findAll: function (req, res) {
        db.User.findAll({}).then(function (dbEvents) {
            return res.json(dbUsers)
        })
    },

    findById: function(req, res) {},
    remove: function(req, res) {}

}