'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Faculty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Faculty.init({
    id: {
    type:DataTypes.UUID,
    defaultValue:DataTypes.UUIDV4,
    primaryKey:true
  },
    facultyName: DataTypes.STRING,
    dean: DataTypes.STRING,
    facultyCode: DataTypes.STRING,
    dateCreated: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Faculty',
  });
  return Faculty;
};