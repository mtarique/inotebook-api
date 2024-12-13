const mongoose = require('mongoose')
const mongoURI = "mongodb://127.0.0.1:27017/inotebook_db"; 

const connectToMongo = () => {
    mongoose.connect(mongoURI)
        .then(() => console.log("Successfully connected to database"))
        .catch((error) => console.log("Oops! database connection error: ", error));
}

module.exports = connectToMongo; 