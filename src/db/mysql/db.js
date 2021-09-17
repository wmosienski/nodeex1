const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'anorektyk', //TODO config env
  database: 'todoapp'
});

const connect = (onConnected) => {
  connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
    onConnected();
    console.log('Connected to the MySQL server.');
  });
}

module.exports = { mysqldb: connection, mysqlConnect: connect };
