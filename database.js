const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  'RTmsgWI',
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

const Messages = sequelize.define('Message', {
  id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
  },
  message: {
      type: DataTypes.STRING,
  },
  createdAt: {
      type: DataTypes.INTEGER,
  },
  creator: {
      type: DataTypes.STRING,
  },
});

const Threads = sequelize.define('Thread', {
  id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
  },
  createdAt: {
    type: DataTypes.INTEGER,
  },
});

Users.hasOne(Messages, { sourceKeyL: 'id' });
Threads.hasMany(Messages, { sourceKey: 'id' });

module.exports = {
  sequelize, Op, Users, Messages, Threads,
};
