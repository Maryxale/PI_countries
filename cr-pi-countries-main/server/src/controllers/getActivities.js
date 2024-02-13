const { Activity } = require('../db');

//ruta para obtener actividades turisticas
const getActivities = async (req, res) => {
    
    const activities = await Activity.findAll();
    return res.json(activities);
    
}