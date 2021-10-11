const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
    },
  summary: {
    type: DataTypes.TEXT(),
    allowNull: false
  },
  spoonacularScore: {
    type: DataTypes.INTEGER,
    defaultValue : 0
  },
  healthScore: {
    type: DataTypes.INTEGER,
    defaultValue : 0
  
  },
  analyzedInstructions: {
    type: DataTypes.TEXT
  }
  }, { timestamps: false });
};