const { Country } = require('../db');



//Ruta para 
const getCountriesName = async (req, res) => {
    const { name } = req.query;
    try{
        const countries = await Country.findAll({
            where: {
            name: {
                [Sequelize.Op.iLike]: `%${name}%`,
            },
            },
        });

        if (countries.length > 0) {
            res.json(countries);
        } else {
            res.status(404).json('No se encontraron países con ese nombre');
        }
    }catch(error){
        console.log(error);
        return res.status(500).json({message:error.message})
    }

}

module.exports = getCountriesName;