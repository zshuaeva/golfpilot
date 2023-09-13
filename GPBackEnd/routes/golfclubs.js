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
router.get('/:id', getGolfclub, (req, res) => {
  res.send(res.golfclub)
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
router.patch('/:id', getGolfclub, async (req, res) => {
  if (req.body.name != null) {
    res.golfclub.name = req.body.name;
  }
  if (req.body.distance != null) {
    res.golfclub.distance = req.body.distance;
  }
  if (req.body.placement != null) {
    res.golfclub.placement = req.body.placement;
  }

  try {
    const updatedGolfclub = await res.golfclub.save();
    res.json(updatedGolfclub);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
//delete one
router.delete('/:id', getGolfclub, async (req, res) => {
  try {
    await res.golfclub.deleteOne();
    res.json({ message: 'Deleted Golfclub' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//middleware function
async function getGolfclub(req, res, next) {
  try {
    golfclub = await Golfclub.findById(req.params.id)
    if (golfclub == null) {
      return res.status(404).json({ message: 'Cannot find golfclub'})
    }
  } catch (err) {
    return res.status(500).json({ message: err.message})
  }
  res.golfclub = golfclub
  next()
}

module.exports = router
