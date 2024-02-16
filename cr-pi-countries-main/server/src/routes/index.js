const router = require('express').Router();

const getCountriesId = require('../controllers/getCountriesId');
const getCountries = require('../controllers/getCountries');
const getCountriesName = require('../controllers/getCountriesName');
const getActivities = require('../controllers/getActivities');
const postActivities = require('../controllers/postActivities');


//todas las rutas

router.get('/:id', getCountriesId);
router.get('/', getCountries);
router.get('/name', getCountriesName);
router.get('/activities', getActivities);
router.post('/activities', postActivities);




module.exports = router;
