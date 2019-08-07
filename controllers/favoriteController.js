var db = require("../models");

module.exports = {

    create: function (req, res) {
        db.favoriteEvent.create({
            favoritefavoriteEventName: req.body.favoritefavoriteEventName,
            favoritefavoriteEventLocation: req.body.favoritefavoriteEventLocation,
            favoriteEventDescription: req.body.favoriteEventDescription,
            favoriteEventImage: req.body.favoriteEventImage,
            favoriteEventDate: req.body.favoriteEventDate,
            favoriteEventTime: req.body.favoriteEventTime,
            favoriteEventCategory: req.body.favoriteEventCategory,
            favoriteEventPriceRange: req.body.favoriteEventPriceRange,
            favoriteEventURL: req.body.favoriteEventPriceRange,
            favoriteEventPreSale: req.body.favoriteEventPriceRange,
            favoriteEventPublicSell: req.body.favoriteEventPriceRange,
        }).then(function () {
            res.redirect(307, "/api/login");
        }).catch(function (err) {
            console.log(err);
            res.json(err)
            // res.status(409).json(err.errors[0].message);
        });
    },

    findAll: function (req, res) {
        db.favoriteEvent.findAll({
            where: {
                favoriteEventName: req.params.favoriteEventName,
                favoriteEventLocation: req.params.favoriteEventLocation,
                favoriteEventDate: req.params.favoriteEventDate,
                favoriteEventTime: req.params.favoriteEventTime,
                favoriteEventCategory: req.params.favoriteEventCategory,

            }
        }).then(function (dbfavoriteEvents) {
            return res.json(dbfavoriteEvents)
        })
    },

    findById: function(req, res) {},
    remove: function(req, res) {}

    

}