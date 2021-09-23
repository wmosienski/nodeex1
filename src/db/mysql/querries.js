const { getMysqlDb } = require('./db')


const all = async query => {
    return new Promise((resolve, reject) =>
        getMysqlDb().query(query, (error, results, fields) => {
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


const dropCreateMysqlDb = async () => {
    return all('DROP TABLE users;')
        .then(() => all('CREATE TABLE users (id int NOT NULL AUTO_INCREMENT, login varchar(255) NOT NULL UNIQUE, password varchar(255) NOT NULL, PRIMARY KEY (id));'));
}

const addUser = async (login, hashedPassword) => {
    return all(`INSERT INTO users (login, password) VALUES ('${login}', '${hashedPassword}')`);
}

const getUserById = async (userId) => {
    return first(`SELECT * FROM users WHERE id = '${userId}'`);
}

const getUserByLogin = async (login) => {
    return first(`SELECT * FROM users WHERE login = '${login}'`);
}


module.exports = {
    dropCreateMysqlDb,
    addUser,
    getUserById,
    getUserByLogin
}

