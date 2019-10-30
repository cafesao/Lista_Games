import { PesquisarGame } from "./funcoes_Pesquisar"
import { prepararObj } from "./funcoes_Adicionar"

//PESQUISA

let nomePesquisar = document.querySelector('input#nomePesquisarInput')

let pesquisar = document.querySelector('button#pesquisar')
pesquisar.addEventListener('click', Pesquisar)

nomePesquisar.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) { 
        Pesquisar()
    }
})

function Pesquisar() {
    if(nomePesquisar.value.length == 0){
        alert('[ERRO] Por favor, insira o campo de pesquisa')
    }
    else {
        PesquisarGame(nomePesquisar.value)
        limparPesquisa()
    }
}

function limparPesquisa() {
    nomePesquisar.value = ''
}

//ADICIONAR

let nome = document.querySelector('input#nomeInput')
let tema = document.querySelector('input#temaInput')
let ano = document.querySelector('input#anoInput')
let empresa = document.querySelector('input#empresaInput')
let engine = document.querySelector('input#engineInput')
let sobre = document.querySelector('#sobreInput')

let adicionar = document.querySelector('button#adicionar')
adicionar.addEventListener('click', Adicionar)

function limparAdicionar() {
    nome.value = ''
    tema.value = ''
    ano.value = ''
    empresa.value = ''
    engine.value = ''
    sobre.value = ''
}

function Adicionar() {
    if(nome.value.length == 0 || tema.value.length == 0 || ano.value.length == 0 || empresa.value.length == 0 || engine.value.length == 0 || sobre.value.length == 0){
        alert('[ERRO] Por favor, insira TODOS os campos.')
    }
    else {
        prepararObj(nome.value, tema.value, ano.value, empresa.value, engine.value, sobre.value)
        limparAdicionar()
    }
}