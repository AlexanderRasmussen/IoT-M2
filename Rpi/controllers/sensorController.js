const axios = require("axios");

module.exports.index = async (req, res) => {
    const humReq = await axios.get('http://localhost:3000/api/sensors/humidity');
    const tempReq = await axios.get('http://localhost:3000/api/sensors/temperature');
    const pirReq = await axios.get('http://localhost:3000/api/sensors/pir');

    var humWithUnit = humReq.data.humidity + humReq.data.unit;
    var tempWithUnit = tempReq.data.temperature + tempReq.data.unit;

    res.render('sensors', { title: 'Sensors', humidity: humWithUnit, temperature: tempWithUnit, pir:  pirReq.data.pirValue});
};
