const { Country, Activity } = require('../db');

//ruta para crear actividad turistica y relacionarla con paises
const postActivities = async (req, res) => {
    const { name, countries } = req.body;

  try {
    const activity = await Activity.create({ name });
    const selectedCountries = await Country.findAll({ where: { id: countries } });

    await activity.setCountries(selectedCountries);

    res.json(activity);
}catch(error){
    console.error('Error al crear la actividad turística:', error);
     return res.status(500).json({ message: error.message});
}

}

module.exports = postActivities;