//EXPRESS = CONTROLADOR DE PORTAS
require('dotenv').config()
const express = require ('express')
const path = require('path')
const routes = require('./routes/routes')
const app = express()


const port = 3000
app.use(express.static('public'))
/*Para reconhecer um parâmetro(variáveis) passado como uma requisição do tipo POST:*/
app.use(express.urlencoded({extended: true})) //Aceita requisições do tipo url-encoded, ou seja, requisições de formulários e etc.
app.use(express.json()) //Aceita JSON como requisição (importante para APIs)

app.use('/', routes)


app.listen(process.env.PORT, ()=> {
  console.log(`App rodando na porta ${process.env.PORT}`)
})