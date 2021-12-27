# **_API_** 

# Primeiro desafio do programa de bolsas da compass uol que tratou-se da criação de uma API cuja funcionalidade assemelha-se ao Trello ou a um Bloco de notas.

## Linguagens e libs utilizadas :books:
- NodeJs
- Express
- Mysql

# Especificações da nossa api:
- A api foi criada em dois momentos o primeiro com as rotas para a criação de projetos e posteriormente as rotas para tarefas para cada projeto específico.
## Funcionalidades


## GET GetAllProjects

https://localhost:3000/api/projetos/

DESCRIÇÃO:
Esta requisição serve para ver o id, titulo, descrição data de criação e atualização de todos os projetos

OUTPUT:
Body Array com todos os projetos criados com o seguinte formato:
id: id de cada projeto
titulo: titulo de cada projeto
descricao: descrição do projeto
dataCriacao: data de criação do projeto
dataAtualizacao: data de atualização do projeto

 {
        "id": 1,
        "titulo": "trocar o readme",
        "descricao": "responsável por acompanhar o fluxo de mercadorias da empresa. Deve documentar e analisar as informações das vendas realizadas",
        "dataCriacao": "2021-12-23T17:10:23.000Z",
        "dataAtualizacao": "2021-12-26T17:51:16.000Z",
        "versao": 0
    }

## GET getProjectById

https://localhost:3000/api/projetos/:id

DESCRIÇÃO:
Esta requisição serve para ver o id, titulo, descrição data de criação e atualização de um projeto específico.

Path Param
id: id do projeto (obrigatório)

OUTPUT:

{
    "id": "9",
    "titulo": "novo projeto",
    "descricao": "elaborar um bom projeto",
    "dataCriacao": "2021-12-26T22:55:27.000Z",
    "dataAtualizacao": "2021-12-26T22:55:27.000Z",
    "versao": 0
}

## POST createProject

https://localhost:3000/api/projetos/

DESCRIÇÃO:
Essa requisição cria um novo projeto.

INPUT:
BODY 
{
    "titulo":"string",
    "descricao":"string"
    
}

## PUT editProject

https://localhost:3000/api/projetos/:id

DESCRIÇÃO:
Essa requisição edita um projeto existente.

Path Param
id: id do projeto (obrigatório)

INPUT:
Body
{
    "titulo": "string",
    "descricao": "string"
}

## DEL deleteProject

https://localhost:3000/api/projetos/:id

DESCRIÇÃO:
Esta requisição serve para deletar algum projeto existente.

INPUT:

Path Param
id: id do projeto (obrigatório)

## GET getAllTasksById

https://localhost:3000/api/projetos/:id/tasks

DESCRIÇÃO:
Esta requisição permite visualizar todas as tarefas pertencentes a um projeto específico.

INPUT:
Path Param
id: id do projeto (obrigatório)

OUTPUT:
Body
id: id da tarefa
titulo: titulo da tarefa
taskrelevance: relevância da tarefa(number)
projeto: id do projeto
dataCriacao: data de criação da tarefa
dataAtualizacao: data de atualização da tarefa
versao: versão da tarefa

 {
        "id": 9,
        "titulo": "12",
        "taskRelevance": 10,
        "completed": false,
        "projeto": 9,
        "dataCriacao": "2021-12-27T14:36:00.000Z",
        "dataAtualizacao": "2021-12-27T14:36:00.000Z",
        "versao": 0
    }

## POST createTask

https://localhost:3000/api/projetos/:id/tasks/

DESCRIÇÃO:
Essa requisição cria uma nova tarefa em um projeto específico.

INPUT:
Path Param
id: id do projeto (obrigatório)

Body
titulo: título da tarefa (obrigatório)
taskrelevance: relevância da tarefa (obrigatório)
completed: tarefa completada ou não(obrigatório)

{
    "titulo": "12",
    "taskRelevance": 10,
    "completed": false
    
}

## PUT editTask
https://localhost:3000/api/projetos/:id/tasks/:id/

DESCRIÇÃO:
Esta requisição serve para atualizar alguma tarefa existente em um projeto.

INPUT:

Path Param
id: id do projeto (obrigatório)
id: id da tarefa (obrigatório)

Body
{
    "titulo": "mudar todas as cores",
    "taskRelevance": 10,
    "completed": false
}

## DEL deleteTask
https://localhost:3000/api/projetos/:id/tasks/:id/

DESCRIÇÃO:
Esta requisição serve para deletar alguma tarefa existente em um projeto.

INPUT:

Path Param
id: id do projeto (obrigatório)
id: id da tarefa (obrigatório)

## 📁 Como baixar e rodar o projeto
    $ git clone https://github.com/Tuanassf/compass.git
    $ cd compass
    $ cd projetoApi
    $ npm install
    $ node api/index.js