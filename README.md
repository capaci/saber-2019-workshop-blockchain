# Saber 2019 - Workshop Ethereum


Workshop ministrado na SABER 2019 (Semana Acadêmica dos cursos de Ciência da Computação e Informática Biomédica da UFPR)

https://saber2019.capaci.dev


## Pré requisitos

- Instale a extensão [Metamask](https://metamask.io/) no seu navegador
- Crie uma carteira na rede Rinkeby
- Solicite alguns ETH (https://faucet.rinkeby.io/)


## Introdução sobre Smart Contracts e solidity

- O que é um Smart Contract?
- Tipos de variáveis e operações básicas
- Array, struct e mapping
- Eventos
- Tipos de funções
- Herança
- Tratando erros com assert e require


## Escrevendo um contrato, fazendo o deploy e testando

- Copie o conteúdo do arquivo `contracts/voting.sol` (Esqueleto do contrato que vamos desenvolver)
- Abra a [Remix IDE](https://remix.ethereum.org)
- Crie um novo arquivo
- Cole o conteúdo do arquivo do primeiro passo (`contracts/voting.sol`)
- A sua atividade principal será desenvolver as seguintes funções:
    - `constructor`: função de inicialização do contrato
    - `vote`: contabiliza o voto de uma pessoa
    - `finish`: encerra a votação deste contrato
    - `winningAnswer`: retorna a resposta vencedora ou `-1` em caso de empate
- Regras de implementação:
    - A pessoa que cria o contrato deve ser a `owner` dele
    - A pergunta e as possíveis respostas são informadas na criação do contrato
    - Cada pessoa (endereço) só pode votar uma vez
    - Somente a pessoa que é `owner` pode encerrar uma votação
- Faça o deploy do contrato
- Você pode testar o contrato na página https://saber2019.capaci.dev/
- Após o deploy, compartilhe o endereço com o restante da turma, para que todo mundo possa votar
    - http://dontpad.com/saber-2019-workshop-blockchain


## Rodando a página localmente

Para visualizar a página localmente, você pode baixar o zip do projeto ou utilizar o comando abaixo, caso prefira o git:

```bash
git clone git@github.com:capaci/saber-2019-workshop-blockchain.git
```

Então você precisará rodar um servidor web dentro do diretório. Um dos modos mais fáceis de se fazer isso é utilizando o seguinte comando:

```
python -m SimpleHTTPServer
```

E o projeto estará disponível no endereço http://localhost:8000.


## Rodando e alterando o projeto localmente

Caso queira queira fazer alterações no projeto, talvez seja mais interessente utilizar o `npm`. Para isso você precisará ter o [node](https://nodejs.org/en/) instalado.

Você pode baixar o zip do projeto ou utilizar o comando abaixo, caso prefira o git:

```bash
git clone git@github.com:capaci/saber-2019-workshop-blockchain.git
```

Após baixar o projeto, instale as dependências do projeto:

```bash
npm install
```

E então utilize o comando abaixo e a página estará disponível no endereço http://localhost:3000:

```bash
npm start
```

Sinta-se à vontade para modificar o projeto e implementar outras ideias :)


## Referências e ferramentas

- [Ethereum](https://www.ethereum.org/)
- [Documentação do Solidity](https://solidity.readthedocs.io/)
- [Metamask](https://metamask.io/) (Carteira online que funciona no navegador)
- [Remix IDE](https://remix.ethereum.org) (Editor online para escrever e testar os seus Smart Contracts)
- [Rinkeby explorer](https://rinkeby.etherscan.io)
- [Faucet](https://faucet.rinkeby.io/) (Solicitar alguns ETH na rede de teste rinkeby)
- [web3.js](https://web3js.readthedocs.io) (importante, caso queira entender como funciona a interação com os Smart Contracts)
- [Slides da palestra sobre blockchain]()
- [Slides do workshop]()
