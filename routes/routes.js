//CONSTRUINDO UM CONTROLADOR DE ROTAS:
const express = require('express')
const path = require('path')
const UsersController = require('../controllers/UsersController')
const router = express.Router()


module.exports = router


router.get('/users', UsersController.showAll)
router.get('/users/:id', UsersController.show)
router.post('/users', UsersController.create)
router.put('/users/:id', UsersController.delete)
router.delete('/users/:id', UsersController.delete)

router.get('/pagina', (req, res)=>{
  res.sendFile(path.resolve('./public/pagina.html'))
})

//Criando rotas:
router.get('/', (req, res)=>{
  res.send('Olá futuros Fullstacks.')
})

router.get('/oi', (req, res)=>{
  res .send('Olá Alunos.')
})

//Rota do controlador de usuarios:
router.get('/users', UsersController.show)




//Gerando um erro, caso nao encontre as rotas definidas:
//Jogando um arquivo estatico para o 404
router.use(function(req, res, next){
  res.status(404).sendFile(path.resolve('./public/404.html'))
})

