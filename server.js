const express = require('express')
const app = express()
const port = 8087
var cors = require('cors')
var { setTimeout } = require('timers/promises');

const mock_flights = require('./json/mock-flights.json');
const path = require('path');

app.use(cors());
app.use(express.static(path.join(__dirname, "eurowings-digital","dist")));
// app.use(express.static("public"));

app.get('/',  (req, res) => {
    console.log(req.headers);
    // res.send({"run": "Run good"});
    res.sendFile(path.join(__dirname, 'dist','/index.html'));
});


app.get('/doctor', (req, res) => {
    console.log(req.headers);
    res.send({"run": "Run good"});
});

app.get('/flights', async (req, res) => {
    await setTimeout(7000);
    res.send(mock_flights);
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})