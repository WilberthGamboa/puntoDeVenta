import { Model, Sequelize } from 'sequelize';
import { sequelize } from '../../db/database';
import { Categories } from '../../categories/model/categories.model';


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
//Categories.hasOne(Products, { foreignKey: { name: 'categoryId', allowNull: false } });
// Movemos la importación de 'Categories' después de la definición de 'Products'






