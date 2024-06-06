//EXPRESS = CONTROLADOR DE PORTAS
require('dotenv').config()
const express = require ('express')
const path = require('path')
const routes = require('./routes/routes')
const app = express()


const port = 3000
app.use(express.static('public'))
app.use(express.urlencoded({extended: true})) //habilitar para que possa fazer requisições do body
app.use(express.json)

app.use('/', routes)


app.listen(process.env.PORT, ()=> {
  console.log(`App rodando na porta ${process.env.PORT}`)
})