const express = require('express');
const app = express();
const port = 8081;

app.use(express.static('client'));

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/client/index.html');
});

app.post('/bmi', (req, res) => console.log('bmi berechnen...: '+req));

app.listen(port, () => console.log('Server gestartet: localhost:8081/'));