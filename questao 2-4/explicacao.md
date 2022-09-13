O código presente nesta pasta é apenas uma resposta parcial às questões propostas, 
devido ao pouco tempo disponível e não foi possível criar um sistema completo como 
foi descrito no cabeçalho das questões, mas de qualquer maneira elegi por criar uma
demonstração mínima com pelo menos uma das entidades descritas, no caso a Turma. É 
possível fazer todas as operações CRUD na turma, porém nenhuma das outras entidades existem.

## Questão 2

    Nesse projeto optei por usar o Sequelize com ORM para genrenciar as classes, os metodos necessários para se encontram na pasta models, sendo que o arquivo *.model.js define o modelo e arquivo index.js o consome para dentro da estrutura do banco.
## Questão 3

    As definições dos métodos CRUD se encrontram na pasta controllers, o arquivo *.controller.js define cada método, a forma como a cada request é processada antes da operação ser realizada e finalmente o commit para o banco, contando com uma menssagem de erro ou sucesso para ser devolvida ao cliente.

## Questão 4

    A criação das rotas foi a parte mais simples do projeto, basta definir cada rota com caminho apropriado dentro de *.routes.js, as rotas para create, findAll e deleteAll não levam nenhum parametro, enquanto as outras dependem da id da turma ser passada como parametro na url. Depois disso apenas é preciso passar o controller definido para aquela operação, já que estes contém a logica embutida para lidar com as requests. Por fim é usado o middleware Router para definir o caminho pai para essas rotas que são consumidas para dentro do applicativo em server.js.

