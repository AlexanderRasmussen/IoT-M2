var express = require('express');
var router = express.Router();

var controller = require('../controllers/sensorApiController');
router.get('/humidity', controller.getHumidity)
    .get('/temperature', controller.getTemperature)
    .get('/pir', controller.getPir);

module.exports = router;