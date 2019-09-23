require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')

//Models
const Driver = require('./models/Driver');
const Race = require('./models/Race');
const Standings = require('./models/Standings');
const Circuit = require('./models/Circuit');

const app = express();
const port = 3003;


app.use(bodyParser.json())
app.use(cors())


app.get('/drivers', async (req, res) => {
  const drivers = await Driver.find({})
  res.send(drivers);
});

app.get('/races', async (req, res) => {
  const races = await Race.find({});
  res.send(races);
})

app.get('/standings', async (req, res) => {
  const standings = await Standings.find({});
  res.send(standings);
})

app.get('/circuits', async (req, res) => {
  const circuits = await Circuit.find({});
  res.send(circuits);
})

mongoose.set('debug', true);

mongoose.connect(process.env.MONGODB_URI, { 
  useNewUrlParser: true,
  dbName: 'F1',
  useUnifiedTopology: true
})
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })





app.listen(port, () => console.log(`Example app listening on port ${port}!`))