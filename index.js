
const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.static('public'));


app.listen(PORT || 3000, () => {
    console.log(`Proyecto Miguel escuchando en el puerto ${ PORT }`);
});