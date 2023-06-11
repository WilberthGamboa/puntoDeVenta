import { Categories } from "../categories/model/categories.model";
import { Products } from "../products/model/products.model";
//import { sequelize } from "./database";


export const defineRelationships = () =>{
   /// sequelize.sync();
    Categories.hasOne(Products, { foreignKey: { name: 'categoryId', allowNull: false } });

    Products.belongsTo(Categories); // Usamos la variable "Categories" en lugar de "categoriesModel"
}


