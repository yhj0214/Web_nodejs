

const express = require('express');

const hostname = '127.0.0.1';
const port = 3000;


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var boardsRouter = require('./routes/boards');

var app = express();


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/boards', boardsRouter);



app.listen(port, () => {
  console.log(`Express is running on http://${hostname}:${port}/`);
})

module.exports = app;
