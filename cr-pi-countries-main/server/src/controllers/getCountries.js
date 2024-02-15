const {Country, Activity } = require('../db');

//get para traer todos los paises
module.exports = async function getCountries(req, res){
    try {
        const countries = await Country.findAll({ include: Activity });
        res.json(countries);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

