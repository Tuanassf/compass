const Modelo = require('./ModeloTabelaProjetos')
const NaoEncontrado = require ('../../erros/NaoEncontrado')

module.exports = {
    listar(){
        return Modelo.findAll()
    },
    inserir (projeto) {
        return Modelo.create(projeto)
    },
    async pegarPorId(id){
        const projetoEncontrado = await Modelo.findOne({
            where: {
                id : id
            }
        })
        if (!projetoEncontrado){
            throw new NaoEncontrado()
        }
        return projetoEncontrado
    },

    atualizar(id, dadosParaAtualizar){
        return Modelo.update(
            dadosParaAtualizar,
            {
                where: { id : id }
            }
        )
    },

    remover(id){
        return Modelo.destroy({
            where: { id : id }
        })
    }

        
}