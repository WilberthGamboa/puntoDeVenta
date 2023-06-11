import CategoriesService from "../service/categories.service"

/*

!En este caso no se hará el la edición simplemente se eliminará si una categoría está mal escrita

*/
export default class CategoriesController{
    constructor(){
        this.categoriesService = new CategoriesService();
    }

    getAllCategories(){
        this.categoriesService.getAllCategories();
    }

    postCategory = async (e, dataDto)=>{
        console.log( 'estoy en el controller'+ dataDto)
        return  await this.categoriesService.postCategory(dataDto);

    }

    deleteCategory = (categoryName) => {

       this.categoriesService.deleteCategory(categoryName);

    }

}