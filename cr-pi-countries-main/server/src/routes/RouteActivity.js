// Revisar y/o agregar comentarios
const { Router } = require('express');
const postActivities = require('../controllers/postActivities')
const deleteActivity = require('../controllers/deleteActivity')
const { Activity } = require('../db');

const router = Router();

//POST | /activities
router.post('/', async (req, res) => {
    //traigo de body todos los atributos de mi modelo Activity y el ID del Pais para establecer la relacion 
    const {name, difficulty, duration, season, countryId} = req.body;
    try {
        //ejecuto mi controller pasandole los datos, este controler devuelve un objeto con la nueva actividad, relacionada con el pais correspondiente.
        const AddAtivity = await postActivities(name, difficulty, duration, season, countryId);
        return res.status(200).json(AddAtivity); //devuelvo esa respuesta. 
    } catch (error) {
        return res.status(400).send(error);
    }
});

//GET | /activities
router.get('/', async (req, res) => {
    try {
        //traigo todas las actividades de la DB.
        const Data = await Activity.findAll(); 
        res.status(200).json(Data);
    } catch (error) {
        return res.status(400).send(error);
    }
})

//se elimina por un nombre que llegue por query (delete)
router.delete('/', async (req, res) => {
    const { name } = req.query;
    try {
      const Deleted = await deleteActivity(name); //cambie el nombre de variable
      if (Deleted) {
        return res.status(200).json({ message: 'Actividad eliminada' });
      } else {
        return res.status(404).json({ message: 'Actividad no encontrada' });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Error al eliminar la actividad' });
    }
  });

module.exports = router;