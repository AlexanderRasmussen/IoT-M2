var express = require('express');
var router = express.Router();

var controller = require('../controllers/sensorApiController');
/**
 * @swagger
 * /api/sensors/humidity:
 *   get:
 *     tags:
 *       - users
 *     description: Returns all users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of users
 *         schema:
 *           $ref: '#/definitions/users'
 */
router.get('/humidity', controller.getHumidity);
/**
 * @swagger
 * /api/sensors/temperature:
 *   get:
 *     tags:
 *       - sensors
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
 *     description: Returns all users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of users
 *         schema:
 *           $ref: '#/definitions/users'
 */
router.get('/pir', controller.getPir);

module.exports = router;