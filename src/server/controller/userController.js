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
        .then(token => token ? 
            res.json(token) : 
            res.json({
                error: true, 
                code: 422, 
                message: 'Incorrect login or password'
            })
        )
        .catch(next)
}

const findUserByIdRequest = (req, res, next) => {
    const { id } = req.params;
    findUserById(id)
        .then(user => user ? 
            res.json(user) :
            res.sendStatus(404)
        )
        .catch(next)
}


module.exports = { 
    registerRequest,
    loginRequest,
    findUserByIdRequest
}