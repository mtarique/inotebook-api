const express = require('express'); 
const connectToMongo = require('./config/database')
const path = require('path'); 
const morgan = require('morgan');
const dotenv = require('dotenv'); 
dotenv.config(); 
const app = express(); 

// Connect to database
connectToMongo();

app.use(morgan('dev')); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// Define a basic GET route
app.get('/api/status', (req, res) => {
    res.json({status: true, message: "API is running..."})
})

app.listen(process.env.PORT || 3000, () => console.log(`Server is listening at port ${process.env.PORT || 3000}`));


