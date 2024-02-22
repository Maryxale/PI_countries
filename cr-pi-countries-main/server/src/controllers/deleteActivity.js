const { Activity } = require('../db')

const deleteActivity = async(name) => {
    try{
        const activity = await Activity.findOne({ where: { name } });

        if (!activity) {
            return false; 
        }
        //desliga la actividad de todos los paises con relacion
        await activity.setCountries([]);

        //elimina la actividad con el destroy
        await activity.destroy();

        return true;
    }catch(error){
        console.error('error para eliminar la actividad', error)
    }
}

module.exports = deleteActivity;