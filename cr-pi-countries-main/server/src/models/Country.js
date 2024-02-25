//modelo country
const { DataTypes } = require('sequelize');


//se hace conexion a sequelize
module.exports = (sequelize) => {
  
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true    
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flags: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: true,
      collate: 'utf8_general_ci', //para que sean independientes de mayusculas y minusculas
      charset: 'utf8', 

    },
    subregion: {
      type: DataTypes.STRING,
      
    },
    area: {
      type: DataTypes.STRING,
      
    },
    population: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, { timestamps: false });
};