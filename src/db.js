require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs"); 
const path = require("path");
//const {DATABASE_URL} = process.env;

// Utiliza la variable de entorno DATABASE_URL para la configuración de Sequelize
const sequelize = new Sequelize(process.env.DATABASE_URL, { 
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Nota: Esto puede ser un riesgo de seguridad en producción.
    },
  },
});


// let sequelize =
//   process.env.NODE_ENV === "production"
//     ? new Sequelize({
//       database: DB_NAME,
//       dialect: "postgres",
//       host: DB_HOST,
//       port: DB_PORT,
//       username: DB_USER,
      
//       pool: {
//         max: 3,
//         min: 1,
//         idle: 10000,
//       },
//       dialectOptions: {
//         ssl: {
//           require: true,
//           // Ref.: https://github.com/brianc/node-postgres/issues/2009
//           rejectUnauthorized: false,
//         },
//         keepAlive: true,
//       },
//       ssl: true,
//     })
//     : new Sequelize(
      
//       { logging: false, native: false }
//     );

 const basename = path.basename(__filename);
 const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

 modelDefiners.forEach(model => model(sequelize));

  let entries = Object.entries(sequelize.models);
  let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
  
  //Define las relaciones entre los modelos
  sequelize.models = Object.fromEntries(capsEntries);
  
    const {  Experiecias} = sequelize.models;
  
  


module.exports = {...sequelize.models, conn: sequelize, sequelize};