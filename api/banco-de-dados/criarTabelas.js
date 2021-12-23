const ModeloTabela = require('../rotas/projetos/ModeloTabelaProjetos')

ModeloTabela
.sync()
.then(()=> console.log ('Tabela criada com sucesso'))
.catch(console.log)