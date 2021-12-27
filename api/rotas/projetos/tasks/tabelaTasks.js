const Modelo = require('./ModeloTabelaTask')

module.exports = {
    listar (idProjeto) {
        return Modelo.findAll({
            where: {
                projeto: idProjeto
            }
        })      
    },
    inserir (dados) {
        return Modelo.create(dados)
    },
    remover (idTask, idProjeto) {
        return Modelo.destroy({
            where: {
                id: idTask,
                projeto: idProjeto
            }
        })
    }
}