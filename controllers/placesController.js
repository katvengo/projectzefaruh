var db = require("../models");
// this is event controller
module.exports = {

    create: function (req, res) {
        db.Places.create({
            Name: req.body.Name,
            Address: req.body.Address,
            City: req.body.City,
            State: req.body.State,
            Country: req.body.Country,
            PostalCode: req.body.PostalCode,
            PriceLow: req.body.PriceLow,
            PriceHigh: req.body.PriceHigh,
            PhoneNumber: req.body.Phone,
            HoursSundayStart: req.body.SundayStart,
            HoursMondayStart: req.body.MondayStart,
            HoursTuesdayStart: req.body.TuesdayStart,
            HoursWednesdayStart: req.body.WednesdayStart,
            HoursThursdayStart: req.body.ThursdayStart,
            HoursFridayStart: req.body.FridayStart,
            HoursSaturdayStart: req.body.SaturdayStart,
    
            HoursSundayEnd: req.body.SundayEnd,
            HoursMondayEnd: req.body.MondayEnd,
            HoursTuesdayEnd: req.body.TuesdayEnd,
            HoursWednesdayEnd: req.body.WednesdayEnd,
            HoursThursdayEnd: req.body.ThursdayEnd,
            HoursFridayEnd: req.body.FridayEnd,
            HoursSaturdayEnd: req.body.SaturdayEnd,
            Age: req.body.age,
            Description: req.body.Description,
            Image: req.body.Image,
            Category: req.body.Category,
            Link: req.body.Link,
            HappyHour: req.body.happyHour,
            HappyHourInfo: req.body.happyHourInfo
        }).then(function () {
            res.redirect(307, "/api/login");
        }).catch(function (err) {
            console.log(err);
            res.json(err)
            // res.status(409).json(err.errors[0].message);
        });
    },

    findAll: function (req, res) {
        db.Places.findAll({
            where: {
                Name: req.params.Name,
                City: req.params.City,
                Category: req.params.Category,

            }
        }).then(function (dbPlaces) {
            return res.json(dbPlaces)
        })
    },

    findById: function(req, res) {},
    remove: function(req, res) {}

    

}