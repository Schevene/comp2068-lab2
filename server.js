//Require express
const express = require('express');
//initialize express
const app = express();
//assign a port for the application
const PORT = 3000;
//Require the calculator logic script
const exportLogic = require('./calculatorLogic');

//obtain the export to use
app.get('/', exportLogic);
app.listen(PORT);
console.log(`Your application is running at http://localhost:${PORT}`);