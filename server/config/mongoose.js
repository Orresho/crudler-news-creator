const mongoose = require('mongoose');

function mongoDB(dbName) {
    const connectionString = `mongodb://localhost/${dbName}`;
    const db = mongoose.connect(connectionString);
    mongoose.Promise = global.Promise;

    console.log('Connection opened to ' + connectionString);
 
}

module.exports = mongoDB;