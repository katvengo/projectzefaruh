const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname + '/.env') });
const express = require("express");

var bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("./config/passport");
LocalStrategy = require('passport-local').Strategy;
const PORT = process.env.PORT || 3001;
const db = require('./models');
const app = express();
const fs = require('fs');


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, UserId, UserToken, StatusId, DealerId, ProjectId'
  );

  next();
});
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json
// Express Session
app.use(session({
  secret: 'AWESOMESECREST',
  saveUninitialized: true,
  resave: true
}));
/**
 * Passport Middleware
 */
app.use(passport.initialize());
app.use(passport.session());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

var load_controllers = function (appRouter) {
  // Load the controllers dynamically
  fs.readdirSync('./routes').forEach((file) => {

    if (file.substr(-3) === '.js') {
      const route = require('./routes/' + file);
      route.router(appRouter);
    }
  });
};
load_controllers(app);


db.sequelize.sync().then(function () {
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});

// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, './client/build/index.html'));
// });

