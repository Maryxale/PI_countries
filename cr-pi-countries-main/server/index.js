const axios = require("axios");
require("dotenv").config();
const server = require("./src/server");
const { conn, Country } = require('./src/db.js');
const PORT = 3001;
const URL = 'http://localhost:5000/countries';

const almacenarData = async () => {
  try{
    const { data } = await axios(URL);
    for(let country of data){
      await Country.create({
        id: country.cca3,
        name: country.name.common,
        flags: country.flags.svg,
        continent:country.region,
        capital: country.capital?.[0],
        subregion: country.subregion,
        area: country.area,
        population: country.population
      })
    }
    console.log('los datos fueron guardados')
  }catch(error){
    console.log('Error al guardar los datos', error)
  }

}
conn.sync({ force: true })
.then(() => almacenarData())
.then(() => {
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
