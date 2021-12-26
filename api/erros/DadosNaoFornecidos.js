class DadosNaoFornecidos extends Error {
    constructor () {
        super( 'Os campos para atualizar não podem ficar vazios')
        this.name = 'DadosNaoFornecidos'
        this.idErro = 2
    }
}

module.exports = DadosNaoFornecidos