var gpio = require('../gpio/gpio');

module.exports.getHumidity = (req, res) => {
    res.send({humidity:1, unit: '%'});
}

module.exports.getTemperature = (req, res) => {
    res.send({temperature: 3, unit: '°C'});
}

module.exports.getPir = (req, res) => {
    res.send({pirValue: 2});
}