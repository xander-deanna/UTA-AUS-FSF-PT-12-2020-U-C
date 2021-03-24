const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'library_db',
  process.env.DB_HOST,
  process.env.DB_PASS,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;
