const mysql = require('mysql');
const { getConfig } = require('../../utils/config');

const connection = mysql.createConnection({...getConfig().DB.MYSQL});

const connect = async () => new Promise((resolve, reject) => {
  connection.connect(err => {
    if (err) {
      reject(err.message);
    } else {
      resolve();
    }
  })
});

module.exports = { 
  getMysqlDb: () => connection, 
  mysqlConnect: connect
};
