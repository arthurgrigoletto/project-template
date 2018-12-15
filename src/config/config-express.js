// DEPENDENCIES
const express = require('express');
const bodyParser = require('body-parser');
const multipartyParser = require('connect-multiparty');
const passport = require('passport');

// ROUTES

module.exports = () => {
  const app = express();

  // BODYPARSER MIDDLEWARE
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  // MULTIPARTY MIDDLEWARE
  app.use(multipartyParser());

  // PASSPORT MIDDLEWARE
  app.use(passport.initialize());

  // PASSPORT CONFIG
  require('./passport')(passport);

  // USE ROUTES

  return app;
};
