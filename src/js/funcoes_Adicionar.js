//Importando
import axios from 'axios'
export { prepararObj }

//Variaveis
var div = document.querySelector('div#resultado_adicionar')


//Funções
async function Adicionar(Game) {
    try{
        carregando(true)
        await axios.post('http://localhost:3001/api/dados', Game)
        carregando(false)

        alert('Seu jogo foi carregado com sucesso!')
    }

    catch(err){
        console.warn(err)
    }
}

function carregando(carregando) {
    if(carregando == true) {
        let carregandoElement = document.createElement('p')
        let carregandoText = document.createTextNode('Carregando...')

        carregandoElement.setAttribute('id', 'carregando')

        carregandoElement.appendChild(carregandoText)

        div.appendChild(carregandoElement)
    }
    else {
        document.querySelector('p#carregando').remove()
    }
}

function prepararObj(nome, tema, ano, empresa, engine, sobre) {
    const Game = {
        nome,
        tema,
        ano: Number(ano),
        empresa,
        engine,
        sobre,
        tags: ''
    }

    prepararTag(nome, empresa, Game)
}

function prepararTag(nome, empresa, Game) {
    let nomeTags = nome.toUpperCase().split(' ')
    let empresaTags = empresa.toUpperCase().split(' ')

    var juntaTags = nomeTags.concat(empresaTags)
    
    Game.tags = juntaTags

    Adicionar(Game)
}