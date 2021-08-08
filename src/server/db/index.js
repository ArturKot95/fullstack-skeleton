const mongoose = require('mongoose');
const chalk = require('chalk');
require('dotenv').config();

let url;

if (process.env.NODE_ENV === 'test') {
  url = `${process.env.MONGO_URL}flashcards`;
} else {
  url = `mongodb+srv://artur:${process.env.DB_PASS}@arturcluster.1bzh8.mongodb.net/flashcards?retryWrites=true&w=majority`;
}

// url = `mongodb+srv://artur:${process.env.DB_PASS}@arturcluster.1bzh8.mongodb.net/flashcards?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

exports.connection = connection;