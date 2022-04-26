var express =require('express');

var indexRouter = require('./routes');
var usersRouter = require('./routes/users');

var app = express();

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use((req, res, next) => {
    res.status(404).send('File Not Found');
})

app.listen(3000, function() {
    console.log('Example App listening on port 3000');
});