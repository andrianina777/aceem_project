module.exports = function(sequelize, DataTypes) {
  let Param_divers = sequelize.define('param_divers', {
    'param_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'param_table': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'param_sigle': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'param_valeur': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'param_description': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    }
  }, { tableName: 'param_divers' }, { underscored: true });

  Param_divers.associate = (models) => { }

  return Param_divers;
};
