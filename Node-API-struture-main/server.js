// Import the packages
const express = require('express');
const dotenv = require('dotenv');
// const logger = require('./middleware/logger');
const morgan = require('morgan');
const connectDB = require('./config/db');
const colors = require('colors');
const errorHandler = require('./middleware/error');
const path = require('path');
const cookieParser = require('cookie-parser');

// Load env file
dotenv.config({path: './config/config.env'});
// MONGO_URL = "mongodb+srv://poojavetal14:pooja123@cluster0.lvroul6.mongodb.net/werqlabs"
// JWT_SECRET = "OmVetal"
// JWT_TOKEN_SECRET_KEY = 'abc'
// JWT_COOKIE_EXPIRE = 10776768766
// JWT_TOKEN_EXPIRE = 23456789
// NODE_ENV = 'production'

// Create database connection
connectDB();

// Load routes
const auth = require('./routes/auth');

const app = express();

// Add public as a static folder
app.use(express.static(path.join(__dirname, 'public')));

// Adding json-parser
app.use(express.json());

// Custome middleware Logger
// app.use(logger);

// add morgan middleware
app.use(morgan('tiny'));

// add cookie parser
app.use(cookieParser());

// add route
app.use('/api/v1/auth', auth);

// Add error middlewear
app.use(errorHandler);

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
    console.log('Server is started'.yellow);
});
 
// Handle unhandle rejection
process.on('unhandledRejection', (error, promise) => {
    console.log(`Error: ${error.message}`);
    // Close server with error code
    server.close(() => {
        process.exit(1);
    });
});