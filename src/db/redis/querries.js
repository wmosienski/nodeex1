const { redisdb } = require('./db')
const merge = require('deepmerge')

const dropCreateRedisDb = () => {
    // redisdb.flushall()
}

const createUpdateSession = (id, session) => {
    const prevSession = redisdb.get(id);
    redisdb.set(id, merge(prevSession, session));
}

const getSessionById = id => redisdb.get(id);



module.exports = {
    dropCreateRedisDb,
    createUpdateSession,
    getSessionById
}

