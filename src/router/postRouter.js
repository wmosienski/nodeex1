const express = require('express');
const router = express.Router();

const { 
    //findPostsByTitleRequest,
    //findUserPostsByUserIdRequest,
 } = require("../controller/postsController");


//router.get('/posts-by-title', findPostsByTitleRequest);
//router.get('/user-posts/:userId', findUserPostsByUserIdRequest);


module.exports = { postsRouter: router }