require('dotenv').config()

const express = require("express")
const sequelize = require('./db')
const { Sequelize } = require('sequelize')


const PORT = process.env.PORT || 5000

const app = express()

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, ()=> {console.log(`Server started: http://localhost:${PORT}`)})
  } catch (e) {
    console.log(e,"123412")
  }
}

start()


