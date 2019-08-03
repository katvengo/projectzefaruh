var db = require("../models");

module.exports = {

    create: function (req, res) {
        db.Event.create({
        
        }).then(function () {
            res.redirect(307, "/api/login");
        }).catch(function (err) {
            console.log(err);
            res.json(err)
            // res.status(409).json(err.errors[0].message);
        });
    },

    findAll: function (req, res) {
        db.Event.findAll({}).then(function (dbEvents) {
            return res.json(dbEvents)
        })
    },

    findById: function(req, res) {},
    remove: function(req, res) {}

    

}