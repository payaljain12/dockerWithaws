// var createError = require('http-errors');
var express = require('express');
var path = require('path');

// var cookieParser = require('cookie-parser');
var logger = require('morgan'); 

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
require('./config/config');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(8002, function() {
  console.log("Server started at port 8002");
});

module.exports = app;
