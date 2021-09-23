const express = require('express');
const router = express.Router();
const { loginPasswordSchema, byIdSchema } = require('../validation/userValidation');
const { 
    registerRequest,
    loginRequest,
    findUserByIdRequest,
 } = require("../controller/userController");
const { validate } = require('express-validation');




router.post('/register', validate(loginPasswordSchema), registerRequest);
router.post('/login', validate(loginPasswordSchema), loginRequest);

router.get('/:id', validate(byIdSchema), findUserByIdRequest);


module.exports = { userRouter: router }