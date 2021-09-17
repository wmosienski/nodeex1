const { 
    register,
    userLogin,
    findUserById,
} = require('../service/userService');


const registerRequest = (req, res, next) => {
    const { login, password } = req.body;
    register(login, password)
        .then(() => res.json({message: 'register succesfull'}))
        .catch(next)
}

const loginRequest = (req, res, next) => {
    const { login, password } = req.body;
    userLogin(login, password)
        .then(({user, token}) => res.json({
            message: 'login succesfull',
            user,
            token,
        }))
        .catch(next)
}

const findUserByIdRequest = (req, res, next) => {
    const { id } = req.params;
    findUserById(id)
        .then(user => res.json({
            message: user ? 'user found succesfully' : 'no user found for provided id',
            user,
        }))
        .catch(next)
}


module.exports = { 
    registerRequest,
    loginRequest,
    findUserByIdRequest
}