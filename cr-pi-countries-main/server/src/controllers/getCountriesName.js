const { Sequelize,Op } = require('sequelize');
const { Country, Activity } = require('../db');

//Ruta para traer los paises por nombre
const getCountriesName = async (name) => {
  



  try {
  const { name } = req.query;
  console.log('Name:', name);  // Añade esta línea para depurar

  if (!name) {
    return res.status(400).json({ message: 'Por favor, proporcione un nombre de país.' });
}

     const countries = await Country.findAll({
       where: {
         name: { [Sequelize.Op.iLike]: `%${name}%` }
       }
     });

     console.log('Countries:', countries);  // Añade esta línea para depurar

     if (countries.length === 0) {
       return res.status(404).json({ message: 'No se encontraron países.' });
     }

     res.status(200).json(countries);
   } catch (error) {
     console.error(error);
     res.status(500).json({ message: 'Error interno del servidor.' });
  } 
}

module.exports = getCountriesName;