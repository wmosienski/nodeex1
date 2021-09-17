const { addUser, getUserByLogin, getUserById } = require("../db/mysql/querries")
const { generateToken, generateTimeLimitedToken } = require("../utils/crypt")

const getUserInfo = async user => {
    user.password = undefined;
    // TODO get user info from userInfo table
    return user;
}

const register = async (login, password) => {
    addUser(login, generateToken(password));
}

const userLogin = async (login, password) => {
    const user = await getUserByLogin(login);
    if (!user) {
        throw 'incorrect login';
    }
    const providedHashedPassword = generateToken(password);
    if (user.password === providedHashedPassword) {
        const token = generateTimeLimitedToken({
            login: user.login,
            timestamp: Date.now()
        });
        // TODO start session using token (redis)
        return {
            user: await getUserInfo(user),
            token
        }
    }
    throw 'incorrect password';
}

const findUserById = async (userId) => {
    const user = await getUserById(userId);
    if (!user) {
        throw 'user not found';
    }
    return getUserInfo(user);
}


module.exports = {
    register,
    userLogin,
    findUserById
}