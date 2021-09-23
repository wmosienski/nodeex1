const { addUser, getUserByLogin, getUserById } = require("../../db/mysql/querries")
const { generateToken, generateTimeLimitedToken } = require("../../utils/crypt")

const getUserInfo = async user => {
    user.password = undefined;
    // TODO get user info from userInfo table
    return user;
}

const register = async (login, password) => {
    return addUser(login, generateToken(password));
}

const userLogin = async (login, password) => {
    const user = await getUserByLogin(login);
    if (!user) {
        return false;
    }
    const providedHashedPassword = generateToken(password);
    if (user.password === providedHashedPassword) {
        const token = generateTimeLimitedToken({
            id: user.id,
            timestamp: Date.now()
        });
        // TODO start session using token (redis)
        return token
    }
    
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