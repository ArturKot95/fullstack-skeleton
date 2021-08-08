'use strict';
const http = require('http');
const chalk = require('chalk');
const app = require('./app');
const { db } = require('./db');

db.on('error', err => console.error(err));
db.once('open', () => {
    app.locals.db = db;

    const httpServer = http.createServer(app);
    const port = process.env.PORT || 3000;
    httpServer.listen(port, () => {
        console.log(chalk.cyan('Server is listening'), chalk.yellow(`http://localhost:${port}`));
    });
});