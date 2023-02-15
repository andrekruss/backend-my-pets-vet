// external modules
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// importing routers
const userRoutes = require('./routes/userRoutes');

// creating express app
const app = express();

// middleware setup
app.use(bodyParser.json()); // treat and parse only requests with 'Content-Type': 'application/json'
app.use((req, res, next) => {
    res.setHeader('Allow-Control-Allow-Origin', '*'); // overwrite CORS policies
    res.setHeader('Access-Control-Allow-Methods', '*'); // allows all HTTP methods
    res.setHeader('Acess-Control-Allow-Header', 'Content-Type, Authorization'); // allows 'Content-Type' and 'Authorization' headers
    next();
});

app.use('/users', userRoutes);

mongoose.connect(process.env.DB_CONNECTION_STRING)
.then(result => {
    app.listen(8080);
})
.catch(err => console.log(err));