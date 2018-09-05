var gpio = require('../gpio/gpio');

module.exports.ledTurnOn = (req, res) => {
    gpio.ledOn();
}

module.exports.ledTurnOff = (req, res) => {
    gpio.ledOff();
}

module.exports.ledToggle = (req, res) => {
    gpio.ledToggle();
}