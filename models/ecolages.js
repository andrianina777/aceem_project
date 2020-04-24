module.exports = function(sequelize, DataTypes) {
  let Ecolages = sequelize.define('ecolages', {
    'ecolage_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'ecolage_date_depot': {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "null"
    },
    'ecolage_date_maj': {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "null"
    },
    'ecolage_montant': {
      type: "DOUBLE",
      allowNull: false,
      comment: "null"
    },
    'ecolage_periode_param_fk': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'param_divers',
        key: 'param_id'
      }
    },
    'ecolage_status_param_fk': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'param_divers',
        key: 'param_id'
      }
    }
  }, { tableName: 'ecolages' }, { underscored: true });

  Ecolages.associate = (models) => {
    models.Ecolages.belongsTo(models.Param_divers, { as: 'periode', foreignKey: 'ecolage_periode_param_fk' });
    models.Ecolages.belongsTo(models.Param_divers, { as: 'status', foreignKey: 'ecolage_status_param_fk' });
  }

  return Ecolages;
};
