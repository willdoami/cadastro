const express = require('express');
const db = require('./queries');
const path = require('path');
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
  }));

// Landing page
app.get('/', (request, response) => {
    response.sendFile(__dirname+'/public/index.html');
});

app.get('/candidatos', db.getCandidatos);
app.get('/candidatos/:id', db.getCandidatosById);
app.post('/candidatos', db.createCandidato);
app.delete('/candidatos/:id', db.deleteCandidato);

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});



