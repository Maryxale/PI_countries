const { Country, Activity } = require('../db');

//ruta para crear actividad turistica y relacionarla con paises
const postActivities = async (req, res) => {
    try {
      const { id, name, difficulty, duration, season, countries } = req.body;
  
      // Crear la actividad turística en la base de datos
      const newActivity = await Activity.create({ id, name, difficulty, duration, season });
  
      // Buscar países por nombre en la base de datos o crearlos si no existen
      const countryInstances = await Promise.all(
        countries.map(countryName => Country.findOrCreate({ where: { name: countryName } }))
      );
  
      // Relacionar la actividad con los países
     // await newActivity.setCountries(countryInstances.map(([country]) => country));

       // Relacionar la actividad con los países
      await newActivity.addCountries(countryInstances.map(([country]) => country));
  
      res.status(201).json({ success: true, message: 'Actividad turística creada exitosamente.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Error interno del servidor.' });
    }
}

module.exports = postActivities;