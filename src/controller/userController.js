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
        .then(({user, token}) => user ? 
            res.json({
                message: 'login succesfull',
                user,
                token,
            }) : 
            res.sendStatus(422)
        )
        .catch(next)
}

const findUserByIdRequest = (req, res, next) => {
    const { id } = req.params;
    findUserById(id)
        .then(user => user ? 
            res.json({
                message: 'user found succesfully',
                user,
            }) :
            res.sendStatus(404)
        )
        .catch(next)
}


module.exports = { 
    registerRequest,
    loginRequest,
    findUserByIdRequest
}