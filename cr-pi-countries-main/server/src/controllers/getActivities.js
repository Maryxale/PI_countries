const { Activity } = require('../db');

//ruta para obtener actividades turisticas
const getActivities = async (req, res) => {
    try {
        const activities = await Activity.findAll();
    
        res.status(200).json(activities);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor.' });
      }
    
}

module.exports = getActivities;