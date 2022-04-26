const express = require('express');
const app = express();

var myLogger = (req, res, next) => {
    console.log('LOGGED');
    next();
}

app.use(myLogger);

app.get('/', (req, res, next) => {
    res.send('Hello World');
});

app.listen(3001, function() {
    console.log('Example App listening on port 3000');
});
