const express = require ('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('config')

app.use(bodyParser.json())

const roteador = require('./rotas/projetos')
app.use('/api/projetos', roteador)

app.listen(config.get('api.porta'), () => 
 console.log('Server is running in http://localhost: 3000'))