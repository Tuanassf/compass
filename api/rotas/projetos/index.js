const roteador = require('express').Router()
const TabelaProjetos = require('./TabelaProjetos')
const Projeto = require('./Projeto')
const SerializadorProjeto = require('../../Serializador').SerializadorProjeto

roteador.get('/', async (req, res)=>{
    const resultados = await TabelaProjetos.listar()
    res.status(200)
    const serializador = new SerializadorProjeto(
        res.getHeader('Content-type')
    )
    res.send(
        serializador.serializar(resultados)
    )
})

roteador.post('/', async (req, res, proximo)=>{
    try{
        const dadosRecebidos = req.body
        const projeto = new Projeto(dadosRecebidos)
        await projeto.criar()
        res.status(201)
        const serializador = new SerializadorProjeto(
            res.getHeader('Content-type')
        )
        res.send(
           serializador.serializar(projeto)
        )
    }catch(erro){
        proximo(erro)
    }
})

roteador.get('/:idProjeto', async (req, res, proximo)=>{
    try{
        const id = req.params.idProjeto
        const projeto = new Projeto({ id : id })
        await projeto.carregar()
        res.status(200)
        const serializador = new SerializadorProjeto(
            res.getHeader('Content-type')
        )
        res.send(
            serializador.serializar(projeto)
        )
    }catch (erro){
        proximo(erro)
    }
})

roteador.put('/:idProjeto', async (req, res, proximo)=>{
    try{
        const id = req.params.idProjeto
        const dadosRecebidos = req.body
        const dados = Object.assign({}, dadosRecebidos, { id: id })
        const projeto = new Projeto(dados)
        await projeto.atualizar()
        res.status(204)
        res.end()
    }catch(erro){
        proximo(erro)
    }
})

roteador.delete('/:idProjeto', async (req, res, proximo)=>{ 
    try{
        const id = req.params.idProjeto
        const projeto = new Projeto({ id: id })
        await projeto.carregar()
        await projeto.remover()
        res.status(204)
        res.end()
    }catch(erro){
        proximo(erro)
    }
})

const roteadorTasks = require('./tasks')
roteador.use('/:idProjeto/tasks', roteadorTasks)

module.exports = roteador