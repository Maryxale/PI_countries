const { Country, Activity } = require('../db.js');


//Obtengo la informacion de mi base de datos
const getInfo = async () => {
    try {
        return await Country.findAll({
            include: {
                model: Activity,
                attributes: ['name', 'difficulty', 'duration', 'season'],
                through: {
                    attributes: [],
                },
            }
        }) 
    } catch (error) {
        alert('Error al obtener todos los Paises de la DB incluyendo sus Actividades', error);
    }
};

module.exports = getInfo;