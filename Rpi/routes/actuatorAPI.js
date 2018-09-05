var express = require('express');
var router = express.Router();

var controller = require('../controllers/actuatorApiController');
router.get('/toggleLED', controller.ledToggle)
    .get('/turnOnLED', controller.ledTurnOn)
    .get('/turnOffLED', controller.ledTurnOff);

module.exports = router;