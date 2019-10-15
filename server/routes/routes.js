//Constantes
const express = require('express')
const gamesControl = require('../controllers/gameController')
const routes = express.Router()

//Rotas
routes.get('/dados', gamesControl.coletarTudo)
routes.get('/dados/:nomeGame', gamesControl.coletar)
routes.post('/dados', gamesControl.adicionar)
routes.delete('/dados/:id', gamesControl.deletar)

//Modulos
module.exports = routes
