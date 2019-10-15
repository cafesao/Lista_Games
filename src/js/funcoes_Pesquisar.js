import axios from 'axios'
export { PesquisarGame }
var div = document.querySelector('div#resultado_buscar')

const game = {}

async function PesquisarGame(nomeGamePesquisar) {
    apagarResultado()

    carregando(true)

    const gameAxios = await axios.get(`http://localhost:3001/api/dados/${nomeGamePesquisar}`)

    carregando(false)  
    
    if(gameAxios.data.length == 0) {
        alert('[ERRO] Não foi encontrado esse jogo')
    }
    else {
        console.log(gameAxios.data.length) 
        console.log(gameAxios.data) 
    
        for(let i = 0; i < gameAxios.data.length; i++) {
            const { nome, tema, ano, empresa, engine, sobre } = gameAxios.data[i]
    
            game.nome = nome
            game.tema = tema
            game.ano = ano    
            game.empresa = empresa
            game.engine = engine
            game.sobre = sobre
        
            resultado()
        }
    }
}

function carregando(carregando) {
    if (carregando == true) {
        let carregandoElement = document.createElement('p')
        let carregandoTexto = document.createTextNode('Carregando...')
        carregandoElement.setAttribute('id', 'carregando')

        carregandoElement.appendChild(carregandoTexto)

        div.appendChild(carregandoElement)
    }
    else {
        document.querySelector('p#carregando').remove()
    }
}

function resultado() {
    let divElement = document.createElement('div')
    let nomeElement = document.createElement('p')
    let temaElement = document.createElement('p')
    let empresalement = document.createElement('p')
    let anoElement = document.createElement('p')
    let engineElement = document.createElement('p')
    let sobreElement = document.createElement('p')   
    
    divElement.setAttribute('id', 'divJogo')
    let nomeTexto = document.createTextNode(`Nome: ${game.nome}`)
    let temaTexto = document.createTextNode(`Tema: ${game.tema}`)
    let empresaTexto = document.createTextNode(`Empresa: ${game.empresa}`)
    let anoTexto = document.createTextNode(`Lançamento: ${game.ano}`)
    let engineTexto = document.createTextNode(`Engine: ${game.engine}`)
    let sobreTexto = document.createTextNode(`Sobre: ${game.sobre}`)

    nomeElement.appendChild(nomeTexto)
    temaElement.appendChild(temaTexto)
    empresalement.appendChild(empresaTexto)
    anoElement.appendChild(anoTexto)
    engineElement.appendChild(engineTexto)
    sobreElement.appendChild(sobreTexto)

    divElement.appendChild(nomeElement)
    divElement.appendChild(temaElement)
    divElement.appendChild(empresalement)
    divElement.appendChild(anoElement)
    divElement.appendChild(engineElement)
    divElement.appendChild(sobreElement)   
    
    div.appendChild(divElement)
}

function apagarResultado() {
    div.innerHTML = ''
}