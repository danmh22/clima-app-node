const axios = require('axios');

const getClima = async ( lat, lon ) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=9cb52550694fefbaebba59e306a8deaf&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}