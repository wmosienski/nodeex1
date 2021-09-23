const express = require('express');
const { userRouter } = require('./router/userRouter');
const { mysqlConnect } = require('../db/mysql/db');
const { ValidationError } = require('express-validation');
const { redisConnect } = require('../db/redis/db');
const { postRouter } = require('./router/postRouter');
const { mongoConnect } = require('../db/mongo/db');


const app = express()
const port = 3000

app.use(express.json())
app.use('/user', userRouter)
app.use('/post', postRouter)
app.use(function(err, req, res, next) {
    if (err instanceof ValidationError) {
      return res.status(err.statusCode).json(err)
    }
    return res.status(500).json(err)
})


mysqlConnect()
    .then(() => redisConnect())
    .then(() => mongoConnect())
    .then(() => app.listen(port, () => console.log("Express running")))
    .catch(err => console.log(err))
    