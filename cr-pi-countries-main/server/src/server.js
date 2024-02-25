const express = require("express");
const morgan = require("morgan"); 
const router = require("./routes/index");
const cors = require("cors");

const server = express();

//middlewares (soportar acciones asincronas)
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

const corsOptions = {origin: '*',}

server.use(morgan("dev")); //para proporcionar info mas detallada sobre cada peticion
server.use(express.json()); //para que el back entienda lo que le pasa el front
server.use(cors(corsOptions)); //cruzar peticiones entre navegador y servidor


server.use('/',router);

module.exports = server;
