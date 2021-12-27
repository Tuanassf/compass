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
    },
    async pegarPorId (idTask, idProjeto) {
        const encontrado = await Modelo.findOne({
            where: {
                id: idTask,
                projeto: idProjeto
            },
            raw: true
        })

        if (!encontrado) {
            throw new Error ('Projeto não encontrado')
        }
        return encontrado
    },
    atualizar (dadosDaTask, dadosParaAtualizar) {
        return Modelo.update(
            dadosParaAtualizar,
            {
                where: dadosDaTask
            }
        )
    }
}