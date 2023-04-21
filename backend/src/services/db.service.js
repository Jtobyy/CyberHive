//database connection
const mongoose = require('mongoose');
const dbConfig = require('../configs/index').dbConfig;

//connect to database
const connectDB = async () => {
  
    try {
        //this is the connection to the database
        await mongoose.connect(dbConfig.uri, dbConfig.options);
        //if the connection is successful, it will be displayed in the console
        console.log('MongoDB Connected');
    } catch (err) {
        //if there is an error, it will be displayed in the console
        console.error(err.message);
        //exit the process with failure
        process.exit(1);
    }
}

module.exports = connectDB;
