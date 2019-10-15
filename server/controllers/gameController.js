//Importando
const moongose = require('mongoose')
const Games = moongose.model('Games')

//Exportando
module.exports = {

    async coletarTudo(req, res) {
        const games = await Games.find()
        return res.json(games)
    },

    async coletar(req, res) {
        const nomeGame = req.params.nomeGame.toUpperCase().split(' ')
        const game = await Games.find({"tags": { $all: nomeGame }})
        return res.json(game)
    },

    async adicionar(req, res) {
        const game = await Games.create(req.body)
        return res.send('Adicionado com Sucesso!')
    },

    async deletar(req, res) {
        await Games.findByIdAndRemove(req.params.id)
        return res.send('Removido com Sucesso!')
    }
}