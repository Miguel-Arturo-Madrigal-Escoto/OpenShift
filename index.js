
const express = require('express');
require('dotenv').config();
const app = express();
const { PORT, SERVER_PORT } = process.env;

app.use(express.static('public'));
app.listen(PORT, SERVER_PORT, () => {
    console.log(`Applicacion corriendo en puerto ${ PORT }`);
})