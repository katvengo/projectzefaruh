const bcrypt = require('bcrypt');
const saltRounds = 10;
var db = require("../models");


const _generatePasswordHash = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (!err) {
        resolve(hash)
      } else {
        reject(err)
      }
    });
  })

};

module.exports = {
  signUp: (req) => {
    const password = req.body.password
    _generatePasswordHash(password).then((hash) => {
      console.log("HASH", hash)
    })

  }

  // create: function (req, res) {
  //   db.User.create({
  //     username: req.body.username,
  //     email: req.body.email,
  //     password: req.body.password,
  //     image: req.body.image,
  //     interests: req.body.interests,
  //   }).then(() => {
  //     res.redirect(307, "/api/login");
  //   }).catch(function (err) {
  //     console.log(err);
  //     res.json(err);
  //     // res.status(422).json(err.errors[0].message);
  //   });
  // },

  // findAll: function (req, res) {
  //   db.User.findAll({}).then(function (dbUsers) {
  //     return res.json(dbUsers)
  //   })
  // },

  // findOne: function (req, res) {
  //   var user = req.params.username
  //   db.User.findOne({
  //     where: {
  //       username: user
  //     }
  //   }).then(function (dbUsers) {
  //     return res.json(dbUsers)
  //   }).catch()
  // },
  //remove: function(req, res) {}

}