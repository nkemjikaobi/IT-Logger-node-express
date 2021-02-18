const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async => {
    try {
        mongoose.connect(db, {
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to the Database...");
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;