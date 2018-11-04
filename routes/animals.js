var express = require('express');
var router = express.Router();
var exibits = require('./exibits')
var zoo = require('./../database/zoo')

// get a list of objects
router.get(`/`, (req, res) => {
    res.status(200).send(zoo);
})

// get an object by id
router.get(`/:id`, (req, res) => {
    animalID = req.params.id
    res.status(200).send(zoo[animalID])
})

// add an object to the list
router.post(`/`, (req, res) => {
    animalID = req.body.id
    animal = {
        name: req.body.name,
        species: req.body.species
    }
    zoo[animalID] = animal
    res.status(200).send(zoo[animalID])
})

// update an object on the list
router.put(`/:id`, (req, res) => {
    animalID = req.params.id
    animal = {
        name: req.body.name,
        species: req.body.species
    }
    zoo[animalID] = animal
    res.status(200).send(zoo[animalID])
})

// delete an object on the list
router.delete(`/:id`, (req, res) => {
    animalID = req.params.id
    deletedAnimal = zoo[animalID]
    delete zoo[animalID]
    res.status(200).send(deletedAnimal)
})

router.use('/:animalId/exibits/', exibits)

module.exports = router