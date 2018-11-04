const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// API stuff

zoo = {
    '0001': {
        name: 'Human',
        species: 'Homo Sapiens',
    },
    '0002':
    {
        name: 'Wolf',
        species: 'Canis Lupus',
    }
}

// Routes

// get a list of objects
app.get(`/animals`, (req, res) => {
    res.status(200).send(zoo);
})

// get an object by id
app.get(`/animals/:id`, (req, res) => {
    animalID = req.params.id
    res.status(200).send(zoo[animalID])
})

// add an object to the list
app.post(`/animals`, (req, res) => {
    animalID = req.body.id
    animal = {
        name: req.body.name,
        species: req.body.species
    }
    zoo[animalID] = animal
    res.status(200).send(zoo[animalID])
})

// update an object on the list
app.put(`/animals/:id`, (req, res) => {
    animalID = req.params.id
    animal = {
        name: req.body.name,
        species: req.body.species
    }
    zoo[animalID] = animal
    res.status(200).send(zoo[animalID])
})

// delete an object on the list
app.delete(`/animals/:id`, (req, res) => {
    animalID = req.params.id
    deletedAnimal = zoo[animalID]
    delete zoo[animalID]
    res.status(200).send(deletedAnimal)
})

app.listen(3000, () => {
    console.log('API online');
})
