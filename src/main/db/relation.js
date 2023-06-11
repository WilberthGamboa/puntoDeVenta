const Categories = require("../categories/model/categories.model");
const Products = require("../products/model/products.model");

function defineRelationships() {
    Categories.hasOne(Products, { foreignKey: { name: 'categoryId', allowNull: false } });

    Products.belongsTo(Categories); // Usamos la variable "Categories" en lugar de "categoriesModel"
}

module.exports = defineRelationships;
