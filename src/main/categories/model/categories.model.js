import { Sequelize } from "sequelize";
import { sequelize } from "../db/database";
import { Products } from "../../products/model/product.model";

const Categories = sequelize.define('categories', {
    categoryName: {
      type: Sequelize.STRING,
      allowNull: false
    },
  });

  Categories.hasOne(Products, { foreignKey: { name: 'categoryId', allowNull: false } });

  module.exports = Categories;