// Revisar y/o agregar comentarios
const { Router } = require('express')
const fromApi_DB = require('../controllers/fromApi_DB'); // Obtener 
const getInfo = require('../controllers/getInfo'); // Obtener
const { Op } = require('sequelize'); // revisar si sacarlo

const router = Router();

// GET | /countries
// GET | /countries/name?="..."
router.get('/', async (req, res) => {
    const {name} = req.query; //guardo por name
    await fromApi_DB(); //guarde los paises
    const InfoDB = await getInfo(); 
    
    try {
        if(!name) {
            return res.status(200).json(InfoDB); //si no me pasan "name" por query, devuelvo todos los paises. 
        }
        else {
            //si si obtengo a "name" por query, hago un filter de lo que tengo en mi BD y comparo, si alguno de los nombres(propiedad name) de todos los objetos(paises) en minusculas (convertida toda la palabra en minuscula), incluye a lo que me llega en "name" tambien convertido en minuscula. ¿Por que?, para de esta forma buscar cualquier tipo de coincidencia, por ejemplo si en mi objeto de mi pais Argentina, su name es Argentina con minuscula, si me viene por query 'argent' va a devolver igual mi objeto con name "Argentina". 
            const CountryFilter = InfoDB.filter(element => element.name.toLowerCase().includes(name.toLowerCase()));
            
            //si el array que me devuelve el filter esta vacio, devuelvo un estado 400 y un mensaje adecuando. Sino, un estado 200 OK, y mi array con mi objeto de paises que tuvieron una coincidencia en su propiedad name. 
            return res.status(200).json(CountryFilter)
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'GetCountries - Internal Server Error' }); // Mejorar Mensaje de error
    }
});


//GET | /countries/:idPais
router.get('/:idPais', async (req, res) => {
    const {idPais} = req.params; //
    const ContryAll = await getInfo(); //

    try {
        if(idPais) {
            //si recibo por params un ID, me fijo con un find si encuentro coincidencia con algun ID de todos los paises que tengo en mi DB
            const idFind = await ContryAll.find(country => country.id === idPais); 
            
            // si no obtuve ninguna coincidencia mando un status 400 y un mensaje
            if(!idFind) return res.status(400).send('ID de pais no se encontro');
            
            // si si encuentra coincidencia, un 200 OK y el objeto que encontre.
            return res.status(200).json(idFind);
        }
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;