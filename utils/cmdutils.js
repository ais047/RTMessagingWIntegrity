const {sequelize} = require('../database');

const syncMySqlDB = async () => {
    await sequelize.sync({
        alter: true
    })
}

module.exports = {
    syncMySqlDB
}