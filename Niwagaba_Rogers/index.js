//configuring the express web app
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
// To parse json data
app.use(bodyParser.json());

const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/Patients';
const path = require('path');

app.use(express.static('public'));

//configuring pug as a template engine in a views folder
app.set('view engine', 'pug');
app.set('views', './views');

//requiring mongoose and connecting to db
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
mongoose.connection.on('open', () => {
    console.log('Mongoose connection open');
  })
.on('error', (err) => {
      console.log(`Connection error: ${err.message}`);
});

//Routes
app.get('/', (req, res) => {
    res.render('home');
})

// requiring the database models
require('./model/patientsDetails');

//server
const server = app.listen(3000, () => {
    console.log(`Express is running on port ${server.address().port}`);
  });