const express = require('express');
const { validate } = require('express-validation');
const { addPostRequest, getPostsByUserIdRequest, addCommentRequest } = require('../controller/postController');
const { newPostSchema, newCommentSchema } = require('../validation/postValidation');
const { byIdSchema } = require('../validation/userValidation');
const router = express.Router();


router.post('/add', validate(newPostSchema), addPostRequest);
router.post('/comment', validate(newCommentSchema), addCommentRequest);
router.get('/posts/:id', validate(byIdSchema), getPostsByUserIdRequest);


module.exports = { postRouter: router }