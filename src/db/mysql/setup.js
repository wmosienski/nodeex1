const { mysqlConnect } = require('./db')
const { dropCreateMysqlDb } = require('./querries')

mysqlConnect()
    .then(() => dropCreateMysqlDb())