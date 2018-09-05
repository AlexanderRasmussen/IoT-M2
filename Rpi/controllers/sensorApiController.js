var gpio = require('../gpio/gpio');

module.exports.getHumidity = (req, res) => {
    res.send({humidity: gpio.humidityRead(), unit: '%'});
}

module.exports.getTemperature = (req, res) => {
    res.send({temperature: gpio.temperatureRead(), unit: '°C'});
}

module.exports.getPir = (req, res) => {
    res.send({pirValue: gpio.pirRead()});
}