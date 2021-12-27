const modelos = [
    require('../rotas/projetos/ModeloTabelaProjetos'),
    require('../rotas/projetos/tasks/ModeloTabelaTask')
]
    

async function criarTabelas () {
    for (let contador = 0; contador < modelos.length; contador ++) {
        const modelo = modelos[contador]
        await modelo.sync()
    }
}

criarTabelas()