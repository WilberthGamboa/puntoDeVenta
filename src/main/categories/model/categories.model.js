import { Sequelize } from "sequelize";
import { sequelize } from "../db/database";
import { Products } from "../../products/model/product.model";

const Categories = sequelize.define('categories', {
    categoryName: {
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
    stock:{
      type:Sequelize.INTEGER,
      allowNull: false
    }
    
  });

  Categories.hasOne(Products)

  module.exports = Categories;