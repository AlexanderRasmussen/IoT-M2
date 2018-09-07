var express = require('express');
var router = express.Router();

var controller = require('../controllers/actuatorApiController');
/**
 * @swagger
 * /api/actuators/toggleLED:
 *   get:
 *     tags:
 *       - Actuators
 *     description: Toggles the LED
 *     responses:
 *       200:
 *         description: LEDstate - Current state at LED 
 */
router.get('/toggleLED', controller.ledToggle);
/**
 * @swagger
 * /api/actuators/turnOnLED:
 *   get:
 *     tags:
 *       - Actuators
 *     description: Turns on the LED
 *     responses:
 *       200:
 *         description: LEDstate - Current state at LED 
 */
router.get('/turnOnLED', controller.ledTurnOn);
/**
 * @swagger
 * /api/actuators/turnOffLED:
 *   get:
 *     tags:
 *       - Actuators
 *     description: Turns off the LED
 *     responses:
 *       200:
 *         description: LEDstate - Current state at LED 
 */
router.get('/turnOffLED', controller.ledTurnOff);
/**
 * @swagger
 * /api/actuators/LEDstate:
 *   get:
 *     tags:
 *       - Actuators
 *     description: Returns the state of the LED
 *     responses:
 *       200:
 *         description: LEDstate - Current state at LED 
 */
router.get('/LEDstate', controller.ledGetState);

module.exports = router;