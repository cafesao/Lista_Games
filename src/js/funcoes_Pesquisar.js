import axios from 'axios'
export { PesquisarGame }
var div = document.querySelector('div#resultado_buscar')

const game = {}

async function PesquisarGame(nomeGamePesquisar) {
    apagarResultado()
    carregando(true)
    try{
        const gameAxios = await axios.get(`http://localhost:3001/api/dados/${nomeGamePesquisar}`)

        const { nome, tema, ano, empresa, engine, sobre } = gameAxios.data[0]
    
        game.nome = nome
        game.tema = tema
        game.ano = ano    
        game.empresa = empresa
        game.engine = engine
        game.sobre = sobre
    
        carregando(false)
        resultado()
    }
    catch(err) {
        alert('[ERRO] Nada foi encontrado com esse nome')
        console.warn(err)
        carregando(false)
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
    let nomeElement = document.createElement('p')
    let temaElement = document.createElement('p')
    let empresalement = document.createElement('p')
    let anoElement = document.createElement('p')
    let engineElement = document.createElement('p')
    let sobreElement = document.createElement('p')   
    
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

    div.appendChild(nomeElement)
    div.appendChild(temaElement)
    div.appendChild(empresalement)
    div.appendChild(anoElement)
    div.appendChild(engineElement)
    div.appendChild(sobreElement)    
}

function apagarResultado() {
    div.innerHTML = ''
}