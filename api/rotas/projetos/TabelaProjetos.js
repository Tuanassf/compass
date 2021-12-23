const Modelo = require('./ModeloTabelaProjetos')

module.exports = {
    listar(){
        return Modelo.findAll()
    }
}