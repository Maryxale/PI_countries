//rutas activity
const { Router } = require('express');
const postActivities = require('../controllers/postActivities')
const deleteActivity = require('../controllers/deleteActivity')
const { Activity } = require('../db');

const router = Router();

//POST | /activities
router.post('/', async (req, res) => {
    //traigo los atributos de mo modelo
    const {name, difficulty, duration, season, countryId} = req.body;
    try {
        //ejecuto mi controller para pasarle los datos de la actividad
        const AddAtivity = await postActivities(name, difficulty, duration, season, countryId);
        return res.status(200).json(AddAtivity); 
    } catch (error) {
        return res.status(400).send(error);
    }
});

//GET | /activities
router.get('/', async (req, res) => {
    try {
        //traigo actividades de mi base se datos
        const Data = await Activity.findAll(); 
        res.status(200).json(Data);
    } catch (error) {
        return res.status(400).send(error);
    }
})

//hice una para eliminar la actividad

router.delete('/', async (req, res) => {
    const { name } = req.query;
    try {
      const Deleted = await deleteActivity(name); 
      if (Deleted) {
        return res.status(200).json({ message: 'Actividad eliminada' });
      } else {
        return res.status(404).json({ message: 'No esta esa actividad' });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Error al eliminar la actividad' });
    }
  });

module.exports = router;