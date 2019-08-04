const path = require('path')
require('dotenv').config({path: path.resolve(__dirname+'/.env')});
const express = require("express");
var cors = require('cors');
const routes = require("./routes");
const session = require("express-session");

const passport = require("./config/passport")

LocalStrategy = require('passport-local').Strategy;

const db = require('./models')

const PORT = process.env.PORT || 3001;
const app = express();

// const mysql = require('mysql');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  require('dotenv').load();

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



app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.use(routes);
// app.use('.env'(search()))
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// })

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

db.sequelize.sync({force: true}).then(function(){ 
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
})