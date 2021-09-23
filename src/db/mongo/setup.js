const { mongoConnect } = require('./db')
const { dropCreateMongoDb } = require('./querries')

mongoConnect()
    .then(() => dropCreateMongoDb())
    .then(console.log('mongo setup finished'))