import { Model, Sequelize } from 'sequelize';
import { sequelize } from '../../db/database';
import { Categories } from '../../categories/model/categories.model';


export const Offers = sequelize.define('offers', {
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  piece:{
    type:Sequelize.INTEGER,
    allowNull:false
  }
});