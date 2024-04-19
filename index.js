const express = require('express'); 
// const mongoose = require('mongoose');
const path = require('path'); 
const cors = require('cors'); 
const morgan = require('morgan');
const app = express(); 
require('dotenv').config(); 

// Connect to mongodb database
// mongoose.set('strictQuery', true); 
// mongoose.connect(process.env.MONGODB_CONNECTION_STRING); 
// mongoose.connection.on("error", error => console.error("MongoDB could not establish a connection: ", error)); 
const connectToMongo = require('./config/database'); 
connectToMongo(); 

var corsOptions = {
    origin: 'localhost:3000', 
    optionSuccessStatus: 200
}

app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 
app.use(express.static(path.join(__dirname, '/public'))); 
app.use(cors(corsOptions)); 

// Routes
app.use('/api', require('./routes/api')); 

const port = process.env.PORT || 3000; 
app.listen(port, () => console.log(`Server is listening at ${port}`)); 

