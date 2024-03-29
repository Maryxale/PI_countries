require("dotenv").config();
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;

conn.sync({ force: true }).then(() => { //force:true (crea la tabla pero la elimina primero si ya existe)
  server.listen(PORT, async () => {
    console.log(`Server listening on port ${PORT}`);
    })
    }).catch(error => console.error(error))
