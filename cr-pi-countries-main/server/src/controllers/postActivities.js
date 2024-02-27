//actividad y relacion con el pais
const { Activity } = require('../db.js');

const postActivities = async (name, difficulty, duration, season, countryId) => {
    try {
        let [actividad, created] = await Activity.findOrCreate({ //el created por si se creo o no una actividad
            where: {
                name, 
                difficulty, 
                duration, 
                season,
            }
        })
        // console.log(created); //este lo use para ver en consola si se creo o no una actividad
        await actividad.setCountries(countryId);
        return actividad; 
    } catch (error) {
        alert('Error cuando se crea la actividad', error);
    }
};

module.exports = postActivities;