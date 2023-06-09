import { app } from 'electron'
const path = require('path');

// Configura el directorio de datos de SQLite
const userDataPath = app.getPath('userData');
const dbPath = path.join(userDataPath, 'database.sqlite');

// Configura Sequelize con SQLite
const Sequelize = require('sequelize');
export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath
});

export const initDb = () =>{
    sequelize.sync().then(() => {
        console.log("Base de datos creada correctamente");
      }).catch((error) => {
        console.error("Error al crear la base de datos:", error);
      });

}
