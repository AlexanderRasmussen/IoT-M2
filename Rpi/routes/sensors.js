var express = require('express');
var router = express.Router();

var controller = require('../controllers/sensorController');
router.get('/', controller.index)
    .get('/api/humidity', controller.getHumidity)
    .get('/api/temperature', controller.getTemperature)
    .get('/api/pir', controller.getPir);;

module.exports = router;
