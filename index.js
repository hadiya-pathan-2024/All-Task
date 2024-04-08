var express = require('express');
var app = express();
require('dotenv').config()
app.set('view engine', 'ejs');
app.use(express.static('public'));
var con = require("./connection/connection.js");
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
var cookieParser = require('cookie-parser');
app.use(cookieParser());
const routes = require("./routes/all_routes.js");

// Routes for entire application.
app.use(routes);
//database connection
con.connect(function (err) {
  if (err) throw err;
  console.log("connected");
})

app.listen(9098);