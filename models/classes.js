module.exports = function(sequelize, DataTypes) {
  let Classes = sequelize.define('classes', {
    'classe_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'classe_niveau': {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "null"
    }
  }, { tableName: 'classes' }, { underscored: true });

  Classes.associate = (models) => { }

  return Classes;
};
