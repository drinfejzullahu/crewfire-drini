const express = require('express');
const app = express();
const photosRoute = require('./routes/photos');
const cors = require('cors');

app.use(cors());

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()}: ${req.method} ${req.url}`);
  next();
});

app.use('/api', photosRoute);

module.exports = app;
