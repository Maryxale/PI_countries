const axios = require('axios');

const {Country, Activity } = require('../db')

//get para traer todos los paises
const getCountries = async (req, res) => {
    try{
        const countries = await CountQueuingStrategy.findAll();

        return res.status(200).json(countries);
    }catch(error){
        return res.status(500).json({message:error.message})
    }
}

module.export = getCountries;