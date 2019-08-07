var db = require("../models");

module.exports = {

    create: function (req, res) {
        db.Event.create({
            eventName: req.body.eventName,
            eventLocation: req.body.eventLocation,
            eventDescription: req.body.eventDescription,
            eventImage: req.body.eventImage,
            eventDate: req.body.eventDate,
            eventTime: req.body.eventTime,
            eventCategory: req.body.eventCategory,
            eventPriceRange: req.body.eventPriceRange,
            eventURL: req.body.eventPriceRange,
            eventPreSale: req.body.eventPriceRange,
            eventPublicSell: req.body.eventPriceRange,
        }).then(function () {
            res.redirect(307, "/api/login");
        }).catch(function (err) {
            console.log(err);
            res.json(err)
            // res.status(409).json(err.errors[0].message);
        });
    },

    findAll: function (req, res) {
        db.Event.findAll({
            where: {
                eventName: req.params.eventName,
                eventLocation: req.params.eventLocation,
                eventDate: req.params.eventDate,
                eventTime: req.params.eventTime,
                eventCategory: req.params.eventCategory,

            }
        }).then(function (dbEvents) {
            return res.json(dbEvents)
        })
    },

    findById: function(req, res) {},
    remove: function(req, res) {}

    

}