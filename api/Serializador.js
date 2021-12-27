const ValorNaoSuportado = require("./erros/ValorNaoSuportado")

class Serializador {
    json (dados) {
        return JSON.stringify(dados)
    }

    serializar (dados) {
        if (this.contentType === 'application/json') {
            return this.json(dados)
        }
        throw new ValorNaoSuportado( this.contentType)
    }
}

class SerializadorProjeto extends Serializador {
    constructor (contentType) {
        super()
        this.contentType = contentType
    }
}

module.exports = {
    Serializador: Serializador,
    SerializadorProjeto: SerializadorProjeto,
    formatosAceitos: ['application/json']
}