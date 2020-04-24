const db = require('../config/database');
const Sequelize = require("sequelize");

const models = {
    Classes: db.import('./classes'),
    Ecolages: db.import('./ecolages'),
    Eleves: db.import('./eleves'),
    Param_divers: db.import('./param_divers'),
    Utilisateurs: db.import('./utilisateurs')
};

Object.keys(models).forEach((modelName) => {
    if ('associate' in models[modelName]) {
        models[modelName].associate(models);
    }
});

models.sequelize = db;
models.Sequelize = Sequelize;

module.exports = models;
