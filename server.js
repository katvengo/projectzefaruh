const path = require('path')
require('dotenv').config({path: path.resolve(__dirname+'/.env')});
const express = require("express");
const routes = require("./routes");
var bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("./config/passport");
LocalStrategy = require('passport-local').Strategy;
const PORT = process.env.PORT || 3001;
const db = require('./models');
const app = express();



// Define middleware here
app.use(bodyParser.urlencoded({ extended: false })); //For body parser
app.use(bodyParser.json());
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
// app.use(flash());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use(routes);
// app.use('.env'(search()))


app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

db.sequelize.sync({force: true}).then(function(){ 
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});