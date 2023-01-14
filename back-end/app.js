var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var imagesRouter = require('./routes/images');
var recommendationsRouter = require('./routes/recommendations');

var cors = require('cors')

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname+'/visuelle2/images/AI17'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/images', imagesRouter);
app.use('/recommendations', recommendationsRouter);

module.exports = app;
