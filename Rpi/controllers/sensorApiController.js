//var gpio = require('../gpio/gpio');

module.exports.getHumidity = (req, res) => {
    res.send({humidity: 27, unit: '%'}); //gpio.humidityRead()
}

module.exports.getTemperature = (req, res) => {
    res.send({temperature: 25, unit: '°C'}); //gpio.temperatureRead()
}

module.exports.getPir = (req, res) => {
    res.send({pirValue: 1}); //gpio.pirRead()
}