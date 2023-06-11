import { Model, Sequelize } from 'sequelize';
import { sequelize } from '../../db/database';


export const Products = sequelize.define('products', {
  barcode: {
    type: Sequelize.STRING,
    allowNull: false
  },
  productName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  stock: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

// Movemos la importación de 'Categories' después de la definición de 'Products'






