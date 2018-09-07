var express = require('express');
var router = express.Router();

var controller = require('../controllers/sensorApiController');
/**
 * @swagger
 * /api/sensors/humidity:
 *   get:
 *     tags:
 *       - Sensors
 *     description: Returns the humidity at the sensor
 *     responses:
 *       200:
 *         description: Humidity and unit
 */
router.get('/humidity', controller.getHumidity);
/**
 * @swagger
 * /api/sensors/temperature:
 *   get:
 *     tags:
 *       - Sensors
 *     description: Returns the temperature at the sensor
 *     responses:
 *       200:
 *         description: Temperatur and unit
 */
router.get('/temperature', controller.getTemperature);
/**
 * @swagger
 * /api/sensors/pir:
 *   get:
 *     tags:
 *       - Sensors
 *     description: Returns the pir value at the sensor
 *     responses:
 *       200:
 *         description: Pir value can be 0 or 1
 */
router.get('/pir', controller.getPir);

module.exports = router;