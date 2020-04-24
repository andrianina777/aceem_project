module.exports = function(sequelize, DataTypes) {
  let Utilisateurs = sequelize.define('utilisateurs', {
    'utilisateur_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'utilisateur_nom': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'utilisateur_pseudo': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'utilisateur_email': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'utilisateur_password': {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "null"
    }
  }, { tableName: 'utilisateurs' }, { undescored: true });

  Utilisateurs.associate = (models) => { }

  return Utilisateurs;
};
