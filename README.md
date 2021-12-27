# **_API_** 

### Primeiro desafio do programa de bolsas da compass uol que tratou-se da criação de uma API cuja funcionalidade assemelha-se ao Trello ou a um Bloco de notas.

## Linguagens e libs utilizadas :books:
- NodeJs
- Express
- Mysql

# Especificações da nossa api:
- A api foi criada em dois momentos o primeiro com as rotas para a criação de projetos e posteriormente as rotas para tarefas para cada projeto específico.
## Funcionalidades


## GET GetAllProjects

https://localhost:3000/api/projetos/

## DESCRIÇÃO:
Esta requisição serve para ver o id, titulo, descrição data de criação e atualização de todos os projetos

## OUTPUT:
#### Body 
Array com todos os projetos criados com o seguinte formato:
#### id: id de cada projeto
#### titulo: titulo de cada projeto
#### descricao: descrição do projeto
#### dataCriacao: data de criação do projeto
#### dataAtualizacao: data de atualização do projeto

 ![image](https://user-images.githubusercontent.com/83101467/147501323-5e14ec0e-1dd6-4cff-9608-172e7ac1fe38.png)


## GET getProjectById

https://localhost:3000/api/projetos/:id

## DESCRIÇÃO:
Esta requisição serve para ver o id, titulo, descrição data de criação e atualização de um projeto específico.

#### Path Param
id: id do projeto (obrigatório)

## OUTPUT:

![image](https://user-images.githubusercontent.com/83101467/147501408-3221a095-8ff1-46f4-9e0c-416670384a45.png)


## POST createProject

https://localhost:3000/api/projetos/

## DESCRIÇÃO:
Esta requisição cria um novo projeto.

## INPUT:
### BODY 

![image](https://user-images.githubusercontent.com/83101467/147501499-b5cbfea4-4a51-432d-b9e0-ae378cba15d5.png)


## PUT editProject

https://localhost:3000/api/projetos/:id

## DESCRIÇÃO:
Esta requisição edita um projeto existente.

#### Path Param
id: id do projeto (obrigatório)

## INPUT:
### Body

![image](https://user-images.githubusercontent.com/83101467/147501540-849de2d2-cf2b-4184-ba99-9235526eda60.png)

## DEL deleteProject

https://localhost:3000/api/projetos/:id

## DESCRIÇÃO:
Esta requisição serve para deletar algum projeto existente.

## INPUT:

### Path Param
id: id do projeto (obrigatório)

## GET getAllTasksById

https://localhost:3000/api/projetos/:id/tasks

## DESCRIÇÃO:
Esta requisição permite visualizar todas as tarefas pertencentes a um projeto específico.

## INPUT:
### Path Param
id: id do projeto (obrigatório)

### OUTPUT:
Body
id: id da tarefa
titulo: titulo da tarefa
taskrelevance: relevância da tarefa(number)
projeto: id do projeto
dataCriacao: data de criação da tarefa
dataAtualizacao: data de atualização da tarefa
versao: versão da tarefa

 ![image](https://user-images.githubusercontent.com/83101467/147501583-42a334fe-e4eb-4bf6-ab4e-777889dee628.png)


## POST createTask

https://localhost:3000/api/projetos/:id/tasks/

## DESCRIÇÃO:
Esta requisição cria uma nova tarefa em um projeto específico.

## INPUT:
Path Param
id: id do projeto (obrigatório)

### Body
titulo: título da tarefa (obrigatório)
taskrelevance: relevância da tarefa (obrigatório)
completed: tarefa completada ou não(obrigatório)

![image](https://user-images.githubusercontent.com/83101467/147501616-05dbf2dd-8bbe-4339-9f38-0c0f631e0446.png)

## PUT editTask
https://localhost:3000/api/projetos/:id/tasks/:id/

## DESCRIÇÃO:
Esta requisição serve para atualizar alguma tarefa existente em um projeto.

## INPUT:

### Path Param
id: id do projeto (obrigatório)
id: id da tarefa (obrigatório)

### Body
![image](https://user-images.githubusercontent.com/83101467/147501638-8e6b3816-73d3-496a-b5f9-eb764a6a9f6b.png)

## DEL deleteTask
https://localhost:3000/api/projetos/:id/tasks/:id/

## DESCRIÇÃO:
Esta requisição serve para deletar alguma tarefa existente em um projeto.

## INPUT:

### Path Param
####id: id do projeto (obrigatório)
####id: id da tarefa (obrigatório)

## 📁 Como baixar e rodar o projeto
    $ git clone https://github.com/Tuanassf/compass.git
    $ cd compass
    $ cd projetoApi
    $ npm install
    $ node api/index.js
