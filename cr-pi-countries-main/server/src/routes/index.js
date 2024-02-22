const { Router } = require("express");

const countries = require('./RouteCountry'); 
const activities = require('./RouteActivity');

const router = Router();

router.use('/countries', countries);  // para que todas mis rutas usen countries
router.use('/activities', activities); //para que todas mis rutas usen activity






module.exports = router;
