const Sequelize = require('sequelize')
const instancia = require('../../../banco-de-dados')

const colunas = {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    taskRelevance: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    projeto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: require('../ModeloTabelaProjetos'),
            key: 'id'
        }
    }
    
}

const opcoes = {
    freezeTableName: true,
    tableName: 'tasks',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: 'versao'
}
module.exports = instancia.define('tasks', colunas, opcoes)