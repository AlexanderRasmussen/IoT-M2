const axios = require("axios");

module.exports.index = async (req, res) => {
   await this.ledGetState(req, res);
}

module.exports.turnOnLED = async (req, res) => {
    await axios.get('http://localhost:3000/api/actuators/turnonled');
    await this.ledGetState(req, res);
}

module.exports.turnOffLED = async (req, res) => {
    await axios.get('http://localhost:3000/api/actuators/turnoffled');
    await this.ledGetState(req, res);
}

module.exports.toggleLED = async (req, res) => {
    await axios.get('http://localhost:3000/api/actuators/toggleled');
    await this.ledGetState(req, res);
}

module.exports.ledGetState = async (req, res) => {
    var response = await axios.get('http://localhost:3000/api/actuators/ledstate');

    if(response.data.LEDstate == false)
        res.render('actuators', { title: 'Actuators', ledState: 'Off' });
    else
        res.render('actuators', { title: 'Actuators', ledState: 'On' });
}