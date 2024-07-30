const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    const Experiencias = sequelize.define('experiencias', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true 
      },
      nombre: { 
        type: DataTypes.STRING, 
        allowNull: true 
      },
      nombrein: { 
        type: DataTypes.STRING, 
        allowNull: true 
      },
      nombrepor: { 
        type: DataTypes.STRING, 
        allowNull: true 
      },
      imgcard: { 
        type: DataTypes.STRING, 
        allowNull: true 
      },
      imggaleria: { 
        type: DataTypes.ARRAY(DataTypes.STRING), 
        allowNull: true 
       },
    
      imgdetalle: { 
        type: DataTypes.STRING, 
        allowNull: true 
      },
      texto: { 
        type: DataTypes.TEXT, 
        allowNull: true 
      },
      textoin: { 
        type: DataTypes.TEXT, 
        allowNull: true 
      },
      textopor: { 
        type: DataTypes.TEXT, 
        allowNull: true 
      },
      presentacion1: { 
        type: DataTypes.TEXT, 
        allowNull: true 
      },
      presentacion1in: { 
        type: DataTypes.TEXT, 
        allowNull: true 
      },
      presentacion1por: { 
        type: DataTypes.TEXT, 
        allowNull: true 
      },
      presentacion2: { 
        type: DataTypes.TEXT, 
        allowNull: true 
      },
      presentacion2in: { 
        type: DataTypes.TEXT, 
        allowNull: true 
      },
      presentacion2por: { 
        type: DataTypes.TEXT, 
        allowNull: true 
      },
      reservaes: { 
        type: DataTypes.TEXT, 
        allowNull: true 
      },
      reservain: { 
        type: DataTypes.TEXT, 
        allowNull: true 
      },
      reservapor : { 
        type: DataTypes.TEXT, 
        allowNull: true 
      },
      textocarruseles: { 
        type: DataTypes.TEXT, 
        allowNull: true 
      },
      textocarruselin: { 
        type: DataTypes.TEXT, 
        allowNull: true 
      },
      textocarruselpor: { 
        type: DataTypes.TEXT, 
        allowNull: true 
      },
    });
  
    return Experiencias;
};
