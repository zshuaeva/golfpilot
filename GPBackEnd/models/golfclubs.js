const mongoose = require('mongoose')

const golfclubSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  distance: {
    type: String,
    required: true
  },
  placement: {
    type: String,
    required: true
  },
})

module.exports= mongoose.model('Golfclub', golfclubSchema)
