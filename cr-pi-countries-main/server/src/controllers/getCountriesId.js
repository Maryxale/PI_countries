const {Country, Activity } = require('../db');

//Ruta para traer un pais por ID
const getCountriesId = async (req, res) => {
const { id } = req.params;
try {
  const country = await Country.findByPk(id, { include: Activity });
  if (country) {
    res.json(country);
  } else {
    res.status(404).json({ error: 'Country not found' });
  }
} catch (error) {
  res.status(500).json({ error: 'Internal Server Error' });
}
}

module.exports = getCountriesId;