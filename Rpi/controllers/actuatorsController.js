const axios = require("axios");


module.exports.index = (req, res) => {
    res.render('actuators', { title: 'Actuators' });
}

module.exports.turnOnLED = async (req, res) => {
    await axios.get('http://localhost:3000/api/actuators/turnonled');
}

module.exports.turnOffLED = async (req, res) => {
    await axios.get('http://localhost:3000/api/actuators/turnoffled');
}

module.exports.turnOnLED = async (req, res) => {
    await axios.get('http://localhost:3000/api/actuators/toggleled');
}