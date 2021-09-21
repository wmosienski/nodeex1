const express = require('express');
const { userRouter } = require('./router/userRouter');
const { mysqlConnect } = require('../db/mysql/db');
const { ValidationError } = require('express-validation');
const app = express()
const port = 3000

app.use(express.json())
app.use('/user', userRouter)
app.use(function(err, req, res, next) {
    if (err instanceof ValidationError) {
      return res.status(err.statusCode).json(err)
    }
    return res.status(500).json(err)
  })

mysqlConnect(() => {
    app.listen(port, function() {
        console.log("Express running");
    });
});