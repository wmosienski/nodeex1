const { register } = require('../service/userService');


const registerRequest = (req, res, next) => {
    const {login, password} = req.body;
    register(login, password)
        .then(() => res.json({message: 'register succesfull'}))
        .catch(next)
}


module.exports = { registerRequest }