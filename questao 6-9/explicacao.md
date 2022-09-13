Este repositório contem diversos arquivos que não são necessáriamente relacionados ao teste, isto se dá porque uso como base para todos os meus projetos de frontend um repositório base que criei para agilizar o desenvolvimento sem depender do react-create-app, mantendo total controle sobre as minhas dependecias e criando um ambiente pronto para entrega, já contando com dockerização e configuração do nginx e possibilidade de usar variaveis de ambiente no browser. Link: https://github.com/mattDuque/react-app

## Questão 6

    O layout hipotértico apresentado foi recriado no arquivo App.tsx, porém devido a limitações de tempo, este já está modificado de acordo com o que é pedidio nas questões seguintes com exceção da 9.

## Questão 7

    A resposta desta se encontra na pasta de mesmo nome, eu tinha a inteção de além de retornar os dados propostos, criar também a tabela e a query necessária para fazer a pesquisa utilizando os recursos de postgres do Heroku, porém devido a limitação de tempo optei por apenas copiar o json dado pelo link na questão 8 e retorná-lo na resposta. link do Heroku: https://stormy-gorge-15263.herokuapp.com/

## Questão 8

    Usando axios para fazer uma request à api da questão 7 os dados são armazenados em estado, que é depois mapeado nas duas tabelas para exibir ao usuário. O código se encontra nas linhas 78-84, 164-171 e 181-206

## Questão 9

    Existem vários pontos de melhoria possíveis nesse layout:
    * O layout é hostil a mobile
    * As duas colunas à esquerda que estão em branco e podem ser removidas. 
    * O header é grande demais, podendo ser reduzido para um terço do seu tamanho ou menos
    * A barra de pesquisa deveria ser centralizada deixando espaço a esqueda para um logo do aplicativo
    * Caso mais funcionalidades venham a ser implementadas, pode-se usar o espaço a direita da barra de pesquisa para inserir um menu responsivo
    * As cores na área de resumo não conversam com o resto de aplicativo, seria ideal implementar a regra 60/30/10 para cores, ou seja, uma cor principal, uma complementar e uma de para acentuar elemtos específicos
    * Mais sugestões dependeriam de saber funções específicas de cada elemento do "projeto"

##  Questão 10

    Para realizar o que foi pedido os ícones de lixeira contam com uma propriedade de onClick que dispara a caixa de dialogo e guarda o index da categoria que foi clicada, caso o usuário cancele esse index é 
    nullado, caso confirme a função handleDelete checa se a recorrencia da categoria é Mensal e alerta o usuário, e passa o index para slplice que retira aquela categoria do objeto. O alerta é mostrado na parte de baixo da tela por 3 segundos. O código se encontra nas linhas 86-109 e 223-243