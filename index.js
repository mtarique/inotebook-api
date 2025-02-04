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
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));  

app.listen(process.env.PORT || 3000, () => console.log(`Server is listening at port ${process.env.PORT || 3000}`));


