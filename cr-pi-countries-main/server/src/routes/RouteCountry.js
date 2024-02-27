//rutas countries

const { Router } = require('express')
const fromApi_DB = require('../controllers/fromApi_DB'); // Obtengo info desde la Api
const getInfo = require('../controllers/getInfo'); // Obtener info desde la base de datos


const router = Router();

// GET | /countries
// GET | /countries/name?="..."
router.get('/', async (req, res) => {
    const {name} = req.query; //guardo por name
    await fromApi_DB(); //guarde los paises
    const InfoDB = await getInfo(); 
    
    try {
        if(!name) {
            return res.status(200).json(InfoDB); //si no me pasan por name, paso todos los paises
        }
        else {
            //si llega por name, con el filter e includes me aseguro que devuelva el pais independientemente de como lo escriban
            const CountryFilter = InfoDB.filter(element => element.name.toLowerCase().includes(name.toLowerCase()));
            
            //si esta vacio se pasa un mensaje desde le front, sino este 200 con la info de pais
            return res.status(200).json(CountryFilter)
        }
    } catch (error) {
        
        return res.status(500).json({message:error.message}); 
    }
});


//GET | /countries/:idPais
router.get('/:idPais', async (req, res) => {
    const {idPais} = req.params; 
    const ContryAll = await getInfo(); 

    try {
        if(idPais) {
            //con el find verifico si coincide el id con el de mis paises 
            const idFind = await ContryAll.find(country => country.id === idPais); 
            
            // si no obtuve ninguna coincidencia
            if(!idFind) return res.status(400).send('ID de pais no se encontro');
            
            // si  encuentra coincidencia
            return res.status(200).json(idFind);
        }
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
});

module.exports = router;