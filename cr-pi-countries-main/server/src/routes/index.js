//configuracion de mis rutas
const { Router } = require("express");

//dos archivos de rutas countries y activities
const countries = require('./RouteCountry');  
const activities = require('./RouteActivity');

const router = Router();

router.use('/countries', countries);  // para que todas mis ruta de countries usen (countries)
router.use('/activities', activities); //para que todas mis rutas de activities usen (activities)






module.exports = router;
