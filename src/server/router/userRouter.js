const express = require('express');
const router = express.Router();
const { validate } = require('express-validation');
const { loginSchema } = require('../validation/userValidation');
const { 
    registerRequest,
    loginRequest,
    findUserByIdRequest,
 } = require("../controller/userController");




router.post('/register', registerRequest);
router.post('/login', validate(loginSchema), loginRequest);

router.get('/:id', findUserByIdRequest);


module.exports = { userRouter: router }