const { mysqlConnect, getMysqlDb } = require("../../src/db/mysql/db");
const { dropCreateMysqlDb, addUser, getUserById, getUserByLogin } = require("../../src/db/mysql/querries");

describe('mongo querries', () => {
    beforeAll(done => {
        mysqlConnect()
            .then(() => dropCreateMysqlDb())
            .finally(() => done())
    });
    
    afterAll(done => {
        dropCreateMysqlDb()
            .then(() => getMysqlDb().end(err => done()))
            .catch(() => done())
    });
    
    it('connects to mysql db', () => {
        expect(getMysqlDb().state).toBe('authenticated');
    });

    it('adds 3 users', () => {
        return addUser("login1", "hashedPassword")
            .then(({ insertId }) => expect(insertId).toEqual(1))
            .then(() => addUser("login2", "hashedPassword"))
            .then(({ insertId }) => expect(insertId).toEqual(2))
            .then(() => addUser("login3", "hashedPassword"))
            .then(({ insertId }) => expect(insertId).toEqual(3))
    });

    it('tries to add user with existing login and fails', async () => {
        await expect(addUser("login1", "hashedPassword123"))
            .rejects
            .toThrow("ER_DUP_ENTRY: Duplicate entry 'login1' for key 'login'");
    });

    it('gets user by id', () => {
        return getUserById(2)
            .then(user => expect(user).toEqual({id: 2, login: "login2", password: "hashedPassword"}))
    });

    it('gets user by login', () => {
        return getUserByLogin('login3')
            .then(user => expect(user).toEqual({id: 3, login: "login3", password: "hashedPassword"}))
    });

});