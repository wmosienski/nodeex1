const express = require('express');
const router = express.Router();

const { 
    registerRequest,
    loginRequest,
    findUserByIdRequest,
 } = require("../controller/userController");


router.post('/register', registerRequest);
router.post('/login', loginRequest);

router.get('/:id', findUserByIdRequest);


module.exports = { userRouter: router }