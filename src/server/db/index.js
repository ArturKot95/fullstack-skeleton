const mongoose = require('mongoose');
const chalk = require('chalk');
require('dotenv').config();

let url = `mongodb+srv://artur:${process.env.DB_PASS}@arturcluster.1bzh8.mongodb.net/flashcards?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log(chalk.bgGreen('Connected to MongoDB (Mongoose)'));
});

exports.db = db;