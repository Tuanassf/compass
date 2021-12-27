const Tabela = require('./tabelaTasks')

class Task {
    constructor ({id, titulo, taskRelevance, completed, projeto, dataCriacao, dataAtualizacao, versao}) {
        this.id = id
        this.titulo = titulo
        this.taskRelevance = taskRelevance
        this.completed = completed
        this.projeto = projeto
        this.dataCriacao = dataCriacao
        this.dataAtualizacao = dataAtualizacao
        this.versao = versao
    }

    validar(){
        
        if (typeof this.titulo !== 'string' || this.titulo.length === 0) {
            throw new Error ('O campo titulo está inválido')
        }

        if (typeof this.taskRelevance !== 'number' || this.taskRelevance.length === 0) {
            throw new Error ('O campo taskrelevance está inválido')
        }

        if (typeof this.completed !== 'boolean' || this.completed.length === 0) {
            throw new Error ('O campo completed está inválido')
        }
    }
        
        
    async criar () {
        this.validar()
        const resultado = await Tabela.inserir({
            titulo: this.titulo,
            taskRelevance: this.taskRelevance,
            completed: this.completed, 
            projeto: this.projeto
        })

        this.id = resultado.id
        this.dataCriacao = resultado.dataCriacao
        this.dataAtualizacao = resultado.dataAtualizacao
        this.versao = resultado.versao
    }

    apagar () {
        return Tabela.remover( this.id, this.projeto)
    }

    async carregar () {
        const task = await Tabela.pegarPorId(this.id, this.projeto)
        this.titulo = task.titulo
        this.taskRelevance = task.taskRelevance
        this.completed = task.completed
        this.dataCriacao = task.dataCriacao
        this.dataAtualizacao = task.dataAtualizacao
    }
    atualizar () {
        const dadosParaAtualizar = {}

        if (typeof this.titulo === 'string' && this.titulo.length > 0){
            dadosParaAtualizar.titulo = this.titulo
        }
        if (typeof this.taskRelevance === 'number' && this.taskRelevance.length > 0){
            dadosParaAtualizar.taskRelevance = this.taskRelevance
        }
        if (typeof this.completed === 'boolean' && this.completed.length > 0){
            dadosParaAtualizar.completed = this.completed
        }
        if (Object.keys(dadosParaAtualizar).length === 0){
            throw new Error ('Não foram fornecidos dados para atualizar')
        }
        return Tabela.atualizar(
            {
                id: this.id,
                projeto: this.projeto
            },
            dadosParaAtualizar
        )
    }
}


module.exports = Task