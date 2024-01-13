/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ******************************************
 * Require statements for the project
 *******************************************/
const assignmentRoutes = require('./routes/assignments');
const express = require('express');
// const bodyParser = require('body-parser');
const colors = require('colors');
const env = require('dotenv').config();
const staticRoutes = require('./routes/static');



/* ******************************************
 * Variables for middleware
 *******************************************/
const app = express();

// For simple debugging
colors.enable();

/* ******************************************
 * Middleware
 *******************************************/

/* ******************************************
 * Routes
 *******************************************/
app.use(staticRoutes);

//Index Route
app.get('/', assignmentRoutes);

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
    console.log(`app listening on ${host}:${port}`)
  })
  