const { redisConnect } = require('./db')
const { dropCreateRedisDb } = require('./querries')

redisConnect()
    .then(() => dropCreateRedisDb())