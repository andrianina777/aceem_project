const Sequelise = require('sequelize');
const Config = require('./url');
const dbConfig = require('./db_config');

const SQLITE = new Sequelise({
    dialect: 'sqlite',
    storage: Config.DATABASE_PATH,
})
module.exports = SQLITE;
