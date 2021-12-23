const TabelaProjetos = require('./TabelaProjetos')

class Projeto {
    constructor ({id, titulo, descricao, dataCriacao, dataAtualizacao,
     versao}) {
         this.id = id
         this.titulo = titulo
         this.descricao = descricao
         this.dataCriacao = dataCriacao
         this.dataAtualizacao = dataAtualizacao
         this.versao = versao
     }
     
     async criar (){
        const resultado = await TabelaProjetos.inserir({
            titulo: this.titulo,
            descricao: this.descricao
        })

        this.id = resultado.id
        this.dataCriacao = resultado.dataCriacao
        this.dataAtualizacao = resultado.dataAtualizacao
        this.versao = resultado.versao

     }

     async carregar(){
         const projetoEncontrado = await TabelaProjetos.pegarPorId(this.id)
         this.titulo = projetoEncontrado.titulo
         this.descricao = projetoEncontrado.descricao
         this.dataCriacao = projetoEncontrado.dataCriacao
         this.dataAtualizacao = projetoEncontrado.dataAtualizacao
         this.versao = projetoEncontrado.versao
     }

     async atualizar(){
        await TabelaProjetos.pegarPorId(this.id)
        const campos = ['titulo', 'descricao']
        const dadosParaAtualizar = {}

        campos.forEach((campo)=>{
            const valor = this[campo]

            if (typeof valor === 'string' && valor.length > 0){
                dadosParaAtualizar[campo] = valor
            }
        })

        if(Object.keys(dadosParaAtualizar).length === 0){
            throw new Error ('Os campos para atualizar não podem ficar vazios')
        }

        await TabelaProjetos.atualizar(this.id, dadosParaAtualizar)
     }

     remover(){
         return TabelaProjetos.remover(this.id)
     }
}

module.exports = Projeto