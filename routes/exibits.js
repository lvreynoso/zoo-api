var express = require('express');
var router = express.Router({mergeParams: true});
var zoo = require('./../database/zoo')

router.get(`/`, (req, res) => {
    animalId = req.params.animalId
    res.status(200).send(zoo[animalId].exibits)
})

router.get(`/:id`, (req, res) => {
    animalId = req.params.animalId
    exibitId = req.params.id
    res.status(200).send(zoo[animalId].exibits[exibitId])
})

router.post(`/`, (req, res) => {
    animalID = req.params.animalId
    exibitId = req.body.id
    exibit = {
        name: req.body.name,
        size: req.body.size
    }
    zoo[animalId].exibits[exibitId] = exibit

    res.status(200).send(exibit)
})

router.put(`/:id`, (req, res) => {
    animalId = req.params.animalId
    exibitId = req.params.id
    exibit = {
        name: req.body.name,
        size: req.body.size
    }
    zoo[animalId].exibits[exibitId] = exibit
    
    res.status(200).send(exibit)
})

// delete an object on the list
router.delete(`/:id`, (req, res) => {
    animalID = req.params.animalId
    exibitId = req.params.id
    delete zoo[animalId].exibits[exibitId]
    
    res.status(200).send(exibit)
})

module.exports = router