var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const homepageRouter = require('./Rpi/routes/homepage');
const sensorsRouter = require('./Rpi/routes/sensors');
const actuatorRouter = require('./Rpi/routes/actuators');
const sensorAPIRouter = require('./Rpi/routes/sensorAPI');
const acutatorAPIRouter = require('./Rpi/routes/actuatorAPI');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'Rpi', 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homepageRouter);
app.use('/sensors', sensorsRouter);
app.use('/actuators', actuatorRouter);
app.use('/api/sensors', sensorAPIRouter);
app.use('/api/actuators', acutatorAPIRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;