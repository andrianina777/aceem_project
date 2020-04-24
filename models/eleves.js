module.exports = function(sequelize, DataTypes) {
  let Eleves = sequelize.define('eleves', {
    'eleve_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'eleve_nom': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'eleve_matricule': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "null"
    },
    'eleve_classe_fk': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'classes',
        key: 'classe_id'
      }
    },
    'eleve_ecolage_fk': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'ecolages',
        key: 'ecolage_id'
      }
    }
  }, { tableName: 'eleves' }, { underscored: true });

  Eleves.associate = (models) => {
    models.Eleves.belongsTo(models.Classes, { foreignKey: 'eleve_classe_fk' });
    models.Eleves.belongsTo(models.Ecolages, { foreignKey: 'eleve_ecolage_fk' });
  }

  return Eleves;
};
