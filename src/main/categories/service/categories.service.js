import { Categories } from "../model/categories.model";




export default class CategoriesService{
    constructor(){
        

    }

    async getAllCategories(){

        try {
            const categories = await Categories.findAll();
            return categories;
          } catch (error) {
            console.error('Error al obtener las categorías:', error);
            throw error;
          }

    }

    async postCategory(dataDto){

        try {
            const category = await Categories.create(dataDto);
            console.log(category)
            return category;
          } catch (error) {
            console.error('Error al crear la categoría:', error);
            throw error;
          }


    }

    async deleteCategory(categoryName){

        try {
            const deletedCategory = await Category.destroy({
              where: { id: categoryName }
            });
            return deletedCategory;
          } catch (error) {
            console.error('Error al eliminar la categoría:', error);
            throw error;
          }
        }

}
