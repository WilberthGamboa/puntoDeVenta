  import { Sequelize } from "sequelize";
  //import { sequelize } from "../db/database";
  //import { Products } from "../../products/model/products.model";
  import { sequelize } from "../../db/database";
import { Products } from "../../products/model/products.model";



   export const Categories = sequelize.define('categories', {
      categoryName: {
        type: Sequelize.STRING,
        allowNull: false
      },
    });
   // Products.belongsTo(Categories); 


