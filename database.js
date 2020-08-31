const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  'hurs',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql',
    logging: console.log,
  },
);

const { Op } = Sequelize;


// Import models
const Users = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
    },
    lastName: {
        type: DataTypes.STRING,
    },
    yubiKeyId: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
});

module.exports = {
  sequelize, Op, Users
};
