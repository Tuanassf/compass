const roteador = require('express').Router()
const TabelaProjetos = require('./TabelaProjetos')

roteador.use('/',async (req, res)=>{
    const resultados = await TabelaProjetos.listar()
    res.send(
        JSON.stringify(resultados)
    )
})

module.exports = roteador