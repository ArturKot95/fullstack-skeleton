'use strict';
const http = require('http');
const chalk = require('chalk');
const app = require('./app');
const { connect } = require('./db');

connect()
.then(client => {
    app.locals.db = client.db('flashcards');

    const httpServer = http.createServer(app);
    const port = process.env.PORT || 3000;
    httpServer.listen(port, () => {
        console.log(chalk.cyan('Server is listening'), chalk.yellow(`http://localhost:${port}`));
    });
});
