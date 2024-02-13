const {Country, Activity } = require('../db');

//Ruta para traer un pais por ID
const getCountriesId = async (req, res) => {
    const { idPais } = req.params;

    try{
        const country = await Country.findOne({
            where: {id: idPais},
            include: Activity, 
        });

        if(country){
            res.json(country);
        }else{
            res.status(404).send('El pais no se ha encontrado');
        }
    }catch(error){
        console.log(error)
        return res.status(500).json({message: error.message})
    }
}

module.exports = getCountriesId;