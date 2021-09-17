const express = require('express');
const { userRouter } = require('../router/userRouter');
const { mysqlConnect } = require('../db/mysql/db');
const app = express()
const port = 3000

app.use(express.json())
app.use('/user', userRouter)

mysqlConnect(() => {
    app.listen(port, function() {
        console.log("Express running");
    });
});