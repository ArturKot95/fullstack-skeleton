'use strict';
const http = require('http');
const chalk = require('chalk');
const express = require('express');
const app = require('./app');

const httpServer = http.createServer(app);
httpServer.listen(process.env.PORT || 3000, () => {
    console.log(chalk.cyan('Server is listening'), chalk.yellow('http://localhost:3000'));
});
