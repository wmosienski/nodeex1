const { mysqldb } = require('./db')


const all = async query => {
    return new Promise((resolve, reject) =>
        mysqldb.query(query, (error, results, fields) => {
            if (!error) {
                resolve(results)
            } else {
                reject(error)
            }
        }
    ));
}

const first = async query => {
    return all(query)
        .then(res => res.length > 0 ? res[0] : null)
}


const dropCreateDb = () => {
    all('DROP TABLE users;');
    all('CREATE TABLE users (id int NOT NULL AUTO_INCREMENT, login varchar(255) NOT NULL, password varchar(255) NOT NULL, PRIMARY KEY (id));')
}

const addUser = async (login, hashedPassword) => {
    return all(`INSERT INTO users (login, password) VALUES ('${login}', '${hashedPassword}')`);
}

const getUserById = async (userId) => {
    return first(`SELECT * FROM users WHERE id = '${userId}'`);
}

const getUserByLogin = async (login) => {
    console.log(login)
    return first(`SELECT * FROM users WHERE login = '${login}'`);
}


module.exports = {
    dropCreateDb,
    addUser,
    getUserById,
    getUserByLogin
}

