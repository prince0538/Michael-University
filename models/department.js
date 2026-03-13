'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Department.belongsTo(models.Faculty, {foreignkey:"facultyId", as:"faculty"})
    }
  }
  Department.init({
    DepartmentId: {
    type:DataTypes.UUID,
    defaultValue:DataTypes.UUIDV4,
    primaryKey:true
  },
    depName: DataTypes.STRING,
    depCode: DataTypes.STRING,
    Hod: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Department',
  });
  return Department;
};