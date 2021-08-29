const express = require('express');
require('dotenv').config();
const db = require('./queries');
var cors = require('cors');
const path = require('path');
const app = express();
const port = 80;
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({
    extended: true,
  }));

// Landing page
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '../public/', 'index.html'));
});

app.get('/candidatos', db.getCandidatos);
app.get('/candidatos/:id', db.getCandidatosById);
app.post('/candidatos', db.createCandidato);
app.delete('/candidatos/:id', db.deleteCandidato);

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});



