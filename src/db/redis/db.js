const redis = require("redis")

let client;

const connect = async () => new Promise((resolve, reject) => {
  client = redis.createClient();
  client.on("error", err => {
    reject(err)
  });
  client.on("connect", () => {
    resolve();
  });
})

module.exports = { getRedisDb: () => client, redisConnect: connect };
