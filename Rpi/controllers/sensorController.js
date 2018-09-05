//var gpio = require('../gpio/gpio');
const axios = require("axios");

module.exports.index = async (req, res) => {
    const humReq = await axios.get('http://localhost:3000/sensors/api/humidity');
    const tempReq = await axios.get('http://localhost:3000/sensors/api/temperature');
    const pirReq = await axios.get('http://localhost:3000/sensors/api/pir');

    var humWithUnit = humReq.data.humidity + humReq.data.unit;
    var tempWithUnit = tempReq.data.temperature + tempReq.data.unit;

    res.render('sensors', { title: 'Sensors', humidity: humWithUnit, temperature: tempWithUnit, pir:  pirReq.data.pirValue});
};

module.exports.getHumidity = (req, res) => {
    res.send({humidity: 27, unit: '%'}); //gpio.humidityRead()
}

module.exports.getTemperature = (req, res) => {
    res.send({temperature: 25, unit: '°C'}); //gpio.temperatureRead()
}

module.exports.getPir = (req, res) => {
    res.send({pirValue: 1}); //gpio.pirRead()
}