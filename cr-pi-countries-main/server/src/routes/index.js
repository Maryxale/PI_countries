const { Router } = require("express");

const countries = require('./RouteCountry'); 
const activities = require('./RouteActivity');

const router = Router();

router.use('/countries', countries);  // para que todas mis rutas usen countries
router.use('/activities', activities); //para que todas mis rutas usen activity

// const getCountriesId = require('../controllers/getCountriesId');
// const getCountries = require('../controllers/getCountries');
// const getCountriesName = require('../controllers/getCountriesName');
// const getActivities = require('../controllers/getActivities');
// const postActivities = require('../controllers/postActivities');


//todas las rutas

// router.get('/:id', getCountriesId);
// router.get('/', getCountries);
// router.get('/name', getCountriesName);
// router.get('/activities', getActivities);
// router.post('/activities', postActivities);




module.exports = router;
