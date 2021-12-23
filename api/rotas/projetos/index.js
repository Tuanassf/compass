const roteador = require('express').Router()
const TabelaProjetos = require('./TabelaProjetos')
const Projeto = require('./Projeto')
const res = require('express/lib/response')

roteador.get('/', async (req, res)=>{
    const resultados = await TabelaProjetos.listar()
    res.send(
        JSON.stringify(resultados)
    )
})

roteador.post('/', async (requisicao, resposta)=>{
    const dadosRecebidos = requisicao.body
    const projeto = new Projeto(dadosRecebidos)
    await projeto.criar()
    res.send(
        JSON.stringify(projeto)
    )
})

module.exports = roteador