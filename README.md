# M02-ProjComp
[Link](http://projeto-comp.herokuapp.com/)
---
Projeto final do 2o módulo do curso da Blue EdTech, utilizando ExpressJS + PostgreSQL.

## .ENV

**Para que o projeto funcione localmente, você deve criar um arquivo .ENV na raiz, com a seguinte informação:**
> DATABASE_URL = *url da database*

#### O projeto utiliza o PostgreSQL. Ao colocar a aplicação no Heroku, você pode obter essa URL no painel de controle da mesma.
---
## CRUD
O projeto tem as quatro operações funcionais:

| Operação | Caminho | Descrição |
| - | - | - |
| Create | /cadastro/ | CRIA um novo campeão |
| Read | /lista-campeoes/ | LÊ as informações de todos os campeões cadastrados e coloca na tela |
| Update | /editar/id/ | EDITA as informações de um campeão |
| Delete | /delete/id/ | APAGA as informações de um campeão. Essa rota pode ser acessada dentro da Edição de cada campeão |
