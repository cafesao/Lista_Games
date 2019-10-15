//Importando Mongoose
const mongoose = require('mongoose')

//Modelo
const gamesSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    tema: {
        type: String,
        required: true
    },
    ano: {
        type: Number,
        required: true
    },
    empresa: {
        type: String,
        required: true
    },
    engine: {
        type: String,
        required: true
    },
    sobre: {
        type: String,
        required: true
    },
    registro: {
        type: Date,
        default: Date.now
    },
    tags : {
        type: Array,
        required: true
    }
})

//Adicionando nome ao modelo
mongoose.model('Games', gamesSchema)