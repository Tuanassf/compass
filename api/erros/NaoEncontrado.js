class NaoEncontrado extends Error {
    constructor () {
        super('Projeto não encontrado!')
        this.name = 'NaoEncontrado'
        this.idErro = 0
    }
}

module.exports = NaoEncontrado