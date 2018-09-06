var express = require('express');
var router = express.Router();

var controller = require('../controllers/actuatorsController');
router.get('/', controller.index)
    .get('/turnOnLED', controller.turnOnLED)
    .get('/turnOffLED', controller.turnOffLED)
    .get('/toggleLED', controller.toggleLED)
    .get('/LEDstate', controller.ledGetState)

module.exports = router;
