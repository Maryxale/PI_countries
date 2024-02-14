const {Country, Activity } = require('../db');

//Ruta para traer un pais por ID
const getCountriesId = async (req, res) => {
    const { id } = req.params;
    let countries;
    try{
        if(id.length >1){
        countries = await Country.findByPk(id,{ include: Activity});

        countries = {
            id: countries.id,
                name: countries.name,
                flags: countries.flags,
                continent: countries.continent,
                capital: countries.capital,
                subregion: countries.subregion,
                area: countries.area,
                population: countries.population,
                activities: countries.activities.map((cn) => {
                    return {
                        id: cn.id,
                        name: cn.name,
                        difficulty: cn.difficulty,
                        duration: cn.duration,
                        season: cn.season
                    }
            })
        }
    }
        res.status(200).json(countries)
}catch(error){
    console.log(error);
    res.status(500).json({message:error.message})
}

}

module.exports = getCountriesId;