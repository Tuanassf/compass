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
}

module.exports = Projeto