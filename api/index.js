const express = require ('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('config')

app.use(bodyParser.json())

app.listen(process.env.PORT || config.get('api.porta'), () => {
    console.log('Server is running in http://localhost: 3000')
})