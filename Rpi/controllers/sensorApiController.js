var gpio = require('../gpio/gpio');

module.exports.getHumidity = (req, res) => {
    try {
        res.send({humidity: gpio.humidityRead(), unit: '%'});
    } catch (error) {
        res.send({humidity: 46, unit: '%'});
    }
}

module.exports.getTemperature = (req, res) => {
    try {
        res.send({temperature: gpio.temperatureRead(), unit: '°C'});
    } catch (error) {
        res.send({temperature: 27, unit: '°C'});
    }
}

module.exports.getPir = (req, res) => {
    try {
        res.send({pirValue: gpio.pirRead()});
    } catch (error) {
        res.send({pirValue: 1});
    }
}