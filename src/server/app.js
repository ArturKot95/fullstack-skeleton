'use strict';

const express = require('express');

const app = express();
const { resolve } = require('path');
const morgan = require('morgan');
const apiRouter = require('./routes');

// logging middleware
app.use(morgan('dev'));

// bodyParser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// prepend '/api' to URIs
app.use('/api', apiRouter);

// serve static files from public
app.use(express.static(resolve(__dirname, '..', '..', 'www')));

// request any page and receive index.html
app.get('*', (req, res) => res.sendFile(resolve(__dirname, '..', '..', 'www/index.html')));

module.exports = app;