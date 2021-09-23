const mongoose = require('mongoose');
const { getConfig } = require('../../utils/config');
const { PostSchema } = require('./model/postSchema');


const connect = async () => new Promise((resolve, reject) => {
  mongoose.connection.on('connected', () => resolve());
  mongoose.connection.on('invalid credentials', () => reject('invalid credentials'))
  mongoose.connect(getConfig().DB.MONGO.HOST);
});

module.exports = { 
  getMongoDb: () => mongoose.connection,
  Post: mongoose.model('Post', PostSchema),
  mongoConnect: connect
};
