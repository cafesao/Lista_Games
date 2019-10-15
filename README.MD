# Jogos e mais jogos
## Back e front unidos, jamais serão vencidos

### Quem é esse tal de Cafesão? :question:

Ola, meu nome é Gabriel, apelido **Cafesão**.
Sou apenas um cara que **ama programar** e gosta de desafios, e desta vez o desafio foi criar um Server (Back-End)  que houvesse um banco de dados (MongoDB) e que organizasse os GET e POST, mas não só isso, criar a parte do usuário (Front-End) para adicionar e pesquisar Jogos.
>Interessante, eu se...pera.

### Eu ja vi um projeto seu parecido com esse :rage:

Sim, eu sei, mas esse é com foco nos jogos, e com este projeto que aprendi alguns truques e claro, o código ficou mais limpo, com menos linhas, então, foi útil no fim.

### Mas de novo, não tinha uma forma mais facil :hushed:

SI...então, na verdade não achei nada, pelo menos com a proposta de um banco de dados que houvesse os jogos, e que tivesse uma API que me retornasse esses dados, obvio que deve existir, mas nada como um [ViaCep](https://viacep.com.br/) ou [Letras](https://api.vagalume.com.br/docs/letras/), então decidi criar algo parecido com esses serviços.

### E como faço para rodar? :open_mouth:

Primeiramente você precisa ter o [Yarn](https://yarnpkg.com/pt-BR/) instalado, junto com o [Node.JS](https://nodejs.org/pt-br/).

Feito isso e verificado se o Yarn e o Node.JS esta devidamente instalado, e só entrar na pasta raiz via terminal e colocar o comando `yarn install`, feito isso ele ira instalar todas as dependências.

Explicação do comando:

>O comando yarn install é usado para instalar todas as dependências de um projeto. As dependências são recuperadas do arquivo package.json do seu projeto, e armazenadas no arquivo yarn.lock.

Depois de ter instalado as dependências e só colocar `yarn dev` para rodar a aplicação e `yarn server` para rodar o server, acesse o link que o terminal do `yarn dev` dará como resposta e já estará funcionando, simples assim.

### Opcional :exclamation:

Você precisa ter instalado o [Docker](https://www.docker.com) ou o banco de dados do MongoDB, lendo o código você ira entender se precisa ou não de alguma modificação.