require('dotenv').config()

const express = require("express")
const sequelize = require('./db')
const models = require('./models/models')
const { Sequelize } = require('sequelize')
const cors = require('cors')


const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({message:'daf'})
})

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, ()=> {console.log(`Server started: http://localhost:${PORT}`)})
  } catch (e) {
    console.error('Unable to connect to the database:', error);
  }
}

start()


