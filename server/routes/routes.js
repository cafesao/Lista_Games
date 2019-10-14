const express = require('express')
const gamesControl = require('../controllers/gameController')
const routes = express.Router()

routes.get('/dados', gamesControl.coletarTudo)
routes.get('/dados/:nomeGame', gamesControl.coletar)
routes.post('/dados', gamesControl.adicionar)
routes.delete('/dados/:id', gamesControl.deletar)

module.exports = routes
