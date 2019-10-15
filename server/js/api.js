// Importa as Lib
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const require_dir = require('require-dir')

// Iniciando o App
const app = express()

//Diz para o App usar JSON no express
app.use(express.json())

//Ativa o cors para o App
app.use(cors())

//Conecta o App ao MongoDB, passando alguns parametros por enquanto obrigatorios
mongoose.connect('mongodb://localhost:27017/api', {useNewUrlParser: true, useUnifiedTopology: true })

//Ativa o require_dir, para ficar observando os modelos no /models/
require_dir('../models/')

//Ativa o App a usar as rotas do routes
app.use('/api', require('../routes/routes'))

//Liga o App a porta 3001, que e a porta onde os outros irão fazer a requisição
app.listen(3001)