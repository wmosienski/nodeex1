const { mysqlConnect } = require('./db')
const { dropCreateDb } = require('./querries')

mysqlConnect(() => {
    dropCreateDb()
})