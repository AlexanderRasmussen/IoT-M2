var gpio = require('../gpio/gpio');
var led = false;

module.exports.ledTurnOn = (req, res) => {
    try {
        gpio.ledOn();
        res.send({LEDstate: gpio.ledGetState()});   
    } catch (error) {
        led = true;
        res.send({LEDstate: led});  
    }
}

module.exports.ledTurnOff = (req, res) => {
    try {
        gpio.ledOff();
        res.send({LEDstate: gpio.ledGetState()});   
    } catch (error) {
        led = false;
        res.send({LEDstate: led});
    }
}

module.exports.ledToggle = (req, res) => {
    try {
        gpio.ledToggle();
        res.send({LEDstate: gpio.ledGetState()});
    } catch (error) {
        if(led == false)
            led = true
        else
            led = false
        res.send({LEDstate: led});
    }
}

module.exports.ledGetState = (req, res) => {
    try {
        res.send({LEDstate: gpio.ledGetState()});
    } catch (error) {
        res.send({LEDstate: led});
    }
}