const { Activity, Country } = require('../db');

//ruta para obtener actividades turisticas
const getActivities = async (req, res) => {
    try {
        // Obtener todas las actividades turísticas de la base de datos
        const activities = await Activity.findAll({ include: [Country] });
    
        res.status(200).json({ success: true, activities });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error interno del servidor.' });
    }
    
}

module.exports = getActivities;