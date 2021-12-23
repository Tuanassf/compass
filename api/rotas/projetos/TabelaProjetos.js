const Modelo = require('./ModeloTabelaProjetos')

module.exports = {
    listar(){
        return Modelo.findAll()
    },
    inserir (projeto) {
        return Modelo.create(projeto)
    }
}