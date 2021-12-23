const Modelo = require('./ModeloTabelaProjetos')

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
            throw new Error('Projeto não encontrado!')
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
    }
        
}