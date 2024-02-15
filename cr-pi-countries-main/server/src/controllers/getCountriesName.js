const { Sequelize,Op } = require('sequelize');
const { Country, Activity } = require('../db');

//Ruta para traer los paises por nombre
const getCountriesName = async (req, res) => {
    // const { name } = req.query;
    // try{
    //     const countries = await Country.findAll({
    //         where: {
    //             name: {[Sequelize.Op.iLike]: `%${name}`}
    //         },
    //     });

    //     if (countries.length > 0) {
    //         res.json(countries);
    //     } else {
    //         res.status(404).json('No se encontraron países con ese nombre');
    //     }
    // }catch(error){
    //     console.log(error);
    //     return res.status(500).json({message:error.message})
    // }
    const { name } = req.query;
    try {
      const countries = await Country.findAll({
        where: {
            name: {
            [Op.iLike]: `%${Byname}%`, // Búsqueda insensible a mayúsculas y minúsculas
          },
        },
        include: Activity,
      });
  
      if (countries && countries.length > 0) {
        res.json(countries);
      } else {
        res.status(404).json({ error: 'No countries found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = getCountriesName;