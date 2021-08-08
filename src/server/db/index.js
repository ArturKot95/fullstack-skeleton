const { MongoClient } = require('mongodb');
const chalk = require('chalk');
require('dotenv').config();

let url = `mongodb+srv://artur:${process.env.DB_PASS}@arturcluster.1bzh8.mongodb.net?retryWrites=true&w=majority`;

function connect() {
  let client = new MongoClient(url);
  return client.connect()
  .then(() => {
    console.log(chalk.bgGreen('Connected to MongoDB.'));
    return client;
  })
  .catch(err => console.error(err));
}

exports.connect = connect;