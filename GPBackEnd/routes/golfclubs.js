const express = require('express')
const router = express.Router()
const Golfclub = require('../models/golfclubs')
//get all
router.get('/', async (req, res) => {
  try {
    const golfclubs = await Golfclub.find()
    res.json(golfclubs)
  } catch (err){
    res.status(500).json({ message : err.message})
  }
})
//get one
router.get('/:id', (req, res) => {
  res.send(req.params.id)
})
//create one
router.post('/', async (req, res) => {
  const golfclub = new Golfclub({
    name: req.body.name,
    distance: req.body.distance,
    placement: req.body.placement,
  })
  try {
    const newGolfclub = await golfclub.save()
    res.status(201).json(newGolfclub)
  } catch (err) {
    res.status(400).json({message : err.message})
  }
})
//update one
router.patch('/:id', (req, res) => {

})
//delete one
router.delete('/:id', (req, res) => {

})

module.exports = router
