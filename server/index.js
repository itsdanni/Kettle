const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();
module.exports = app;

// logging middleware
app.use(morgan('dev'));

// body parsing middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// api routes
//app.use('/api', require('./api'));

app.use(express.static(path.join(__dirname, '..', 'public')));

// error logging middleware
app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal Server Error.');
});

// start server
app.listen(3000, () => console.log('server is eagerly listening on port 3000! '));
