
const router = require('express').Router();


const getCountriesId = require('../controllers/getCountriesId');
const getCountries = require('../controllers/getCountries');
const getCountriesName = require('../controllers/getCountriesName');
const getActivities = require('../controllers/getActivities');
const postActivities = require('../controllers/postActivities');

//todas las rutas
router.get('/countries/:id', getCountriesId);
router.get('/countries', getCountries);

router.get('/countries/name', getCountriesName);
router.get('/countries/activities', getActivities);
router.post('/activities', postActivities);





module.exports = router;
