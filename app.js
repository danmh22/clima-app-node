const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima( 40.400, -3.683 )
//     .then(console.log)
//     .catch(console.log)

const getInfo = async ( direccion ) => {

    try{
        let infoLugar = await lugar.getLugarLatLng(direccion)
        let infoClima = await clima.getClima( infoLugar.lat, infoLugar.lon );
        return `El clima de ${infoLugar.direccion} es de ${infoClima} °C.`;
    } catch (e) {
        return `No se pudo obtener el clima de ${direccion}.`
    }

}

getInfo( argv.direccion )
    .then(console.log)
    .catch(console.log)