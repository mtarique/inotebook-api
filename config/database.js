const mongoose = require('mongoose'); 
// require('dotenv').config();

const connectToMongo = async () => {
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING); 
    mongoose.connection.on("error", error => console.error("MongoDB could not establish a connection: ", error)); 
}

module.exports = connectToMongo; 