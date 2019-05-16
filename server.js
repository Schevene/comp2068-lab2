//initialize express
const express = require('express');
const app = express();
//assign a port for the application
const PORT = 3000;

app.listen(PORT);
console.log(`Your application is running at http://localhost:${PORT}`);