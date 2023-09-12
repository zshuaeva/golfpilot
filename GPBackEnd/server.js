require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())
app.use('golfclubs')
'localhost:3000/golfclubs/asdasd'

const golfclubsRouter = require('./routes/golfclubs')

app.listen(3000, () => console.log('Server Started'))
