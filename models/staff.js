'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Staff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Staff.belongsTo(models.Faculty, {foreignKey: "facultyId", as: "faculty"})
    }
  }
  Staff.init({
    staffId: {
    type:DataTypes.UUID,
    defaultValue:DataTypes.UUIDV4,
    primaryKey:true
  },
    StaffName: DataTypes.STRING,
    staffCode: DataTypes.STRING,
    Gender: DataTypes.STRING,
    qualifications: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Staff',
  });
  return Staff;
};