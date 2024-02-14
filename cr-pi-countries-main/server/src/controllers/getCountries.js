const {Country, Activity } = require('../db');



//get para traer todos los paises
module.exports = async function getCountries(req, res){
   
    try{
        const allCountries = await Country.findAll({include: [Activity] });

        res.status(200).json(allCountries);
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

