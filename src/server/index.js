'use strict';
const http = require('http');
const chalk = require('chalk');
const app = require('./app');
const { connection } = require('./db');

connection.on('error', err => console.error(err));
connection.once('open', () => {
    app.locals.db = connection;

    const httpServer = http.createServer(app);
    const port = process.env.PORT || 3000;
    httpServer.listen(port, () => {
        console.log(chalk.cyan('Server is listening'), chalk.yellow(`http://localhost:${port}`));
    });
});