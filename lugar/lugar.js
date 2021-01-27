const axios = require('axios');

const getLugarLatLng = async ( dir ) => {
    
    const encodedDir = encodeURI( dir);
    
    const params = {
        access_key: '69f27087277b71789479929801074654',
        query: `${encodedDir}`
    }
      
    const resp = await axios.get('http://api.weatherstack.com/current', {params});
    if (resp.data.success === false) {
        throw new Error(`No hay resultados para ${dir}`);
    } 

    const data = resp.data.location;
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        direccion,
        lat,
        lon
    }

}

module.exports = {
    getLugarLatLng
}