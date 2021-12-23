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

roteador.post('/', async (req, res)=>{
    const dadosRecebidos = req.body
    const projeto = new Projeto(dadosRecebidos)
    await projeto.criar()
    res.send(
        JSON.stringify(projeto)
    )
})

roteador.get('/:idProjeto', async (req, res)=>{
    try{
        const id = req.params.idProjeto
        const projeto = new Projeto({ id : id })
        await projeto.carregar()
        res.send(
            JSON.stringify(projeto)
        )
    }catch(erro){
        res.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }
})

roteador.put('/:idProjeto', async (req, res)=>{
    try{
        const id = req.params.idProjeto
        const dadosRecebidos = req.body
        const dados = Object.assign({}, dadosRecebidos, { id: id })
        const projeto = new Projeto(dados)
        await projeto.atualizar()
        res.end()
    }catch(erro){
        res.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }
})

module.exports = roteador