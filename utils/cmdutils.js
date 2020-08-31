const {sequelize} = require('../database');

const syncMySqlDB = () => {
    await sequelize.sync({
        alter: true
    })
}

module.exports = {
    syncMySqlDB
}