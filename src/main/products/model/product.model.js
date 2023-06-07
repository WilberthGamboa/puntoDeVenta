import { Sequelize } from "sequelize";
import { sequelize } from "../db/database";
import { Categories } from "../../categories/model/categories.model";

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
    stock:{
      type:Sequelize.INTEGER,
      allowNull: false
    }

  });

  Products.belongsTo(Categories);