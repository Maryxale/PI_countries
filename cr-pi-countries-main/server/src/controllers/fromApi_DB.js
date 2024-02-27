const { Country } = require('../db.js');

const axios = require('axios');

//Info desde la Api
//El mapeo me devuelve un array con esos objetos, donde cada objeto es un pais. 
const InfoApi = async () => {
    try {
        const response = await axios.get('http://localhost:5000/countries'); 
        const countries = await response.data.map(country => {
            return { ///
                id: country.cca3,
                name: country.name.common,
                flags: country.flags.svg,
                continent: country.continents? country.continents[0]: 'undefined',
                capital: country.capital? country.capital.join(', '): 'undefined',
                subregion: country.subregion? country.subregion: 'undefined',
                area: country.area? country.area: 'undefined',
                population: country.population? country.population: 'undefined',
            }
        }); 
            
        return countries; 
    } catch (error) {
        alert('No se obtuvo datos de la Api', error);
    }
};

//subo la info a mi base de datos
const fromApi_DB = async () => {
    try {
        const DataBase  = await Country.findAll(); //const para guardar los paises

        if(DataBase.length < 1) {
            const allCountries = await InfoApi();
            await Country.bulkCreate(allCountries);
        }//Ejecuto el metodo bulkCreate y asi cargar en mi base de datos todos los paises
    } catch (error) {
        alert('Error al subir los datos de la api a la base de datos',error);
    }
};

module.exports = fromApi_DB; 