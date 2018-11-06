const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const animals = require('./routes/animals')

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Routes
app.use('/animals', animals)

app.listen(3000, () => {
    console.log('API online');
})
