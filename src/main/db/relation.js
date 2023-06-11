import { Categories } from "../categories/model/categories.model";
import { Offers } from "../offers/model/offers.model";
import { Products } from "../products/model/products.model";
//import { sequelize } from "./database";


export const defineRelationships = () =>{
   /// sequelize.sync();
    Categories.hasOne(Products, { foreignKey: { name: 'categoryId', allowNull: false } });

    Products.belongsTo(Categories); // Usamos la variable "Categories" en lugar de "categoriesModel"

    //

    Products.hasMany(Offers, {
        foreignKey: 'productoId', // Nombre de la clave foránea en la tabla de ofertas
        as: 'ofertas', // Alias para acceder a las ofertas desde el modelo de producto
      });
      
      Offers.belongsTo(Products, {
        foreignKey: 'productoId', // Nombre de la clave foránea en la tabla de ofertas
        as: 'producto', // Alias para acceder al producto desde el modelo de oferta
      });
}


