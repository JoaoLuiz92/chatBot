# ChatBot Api_LLM

    Sistema de interação com um OpenIA, e desenvolvido um ChatBot, lhe dando respostas iterativas, que são pré-dispostas por esses sistema chamado LLAMA2,visando uma experiencia nova, e magica com o cliente.

### 📋 Pré-requisitos

Para rodar a API precisa tais softwares instalados em sua maquina :

#### Node.js (Framework de desenvolvimento)

#### Postman (Testes de rotas)

#### Git (Para fazer clone do repositorio)

### 🔧 Instalação

Primeiramente faça um clone deste repositorio para sua maquina:

```
git clone "https://github.com/JoaoLuiz92/chatBot"

```

Instalação das dependencias necessarias, node_modules:

```
npm install

```

Para Rodar a aplicação na máquina digitamos :

```
npm start

```

Então estará rodando no endereço http://localhost:3000/.

## 🔩 Explicando Rotas

###Route (/):
Rota com metodo POST, nela possui toda requisições necessarias para a iteração com o LLAMA2, como, mensagens que poderão ser passadas ao cliente, abordados de especifico assunto, que são encontradas nas "input_data".
Nesta requisição ela cuida dos parametros passados na requisição para o LLAMA2, onde pode-se ajustar (temperature, top_p, do_sample,max_new_tokens)

## ⚙️ Executando os testes de routes

Para os teste de rotas, pode-se usar a ferramenta postman, testanto assim as respostas recebidas do chatbot.
Com isso você tera certeza de que sua rota esta certa, e você esta mandando os parametros corretos para o LLAMA2.

Abra uma nova collection (new), seleciona HTTP.
Na collection colocoque o endereço com a rota, onde esta sendo manda as requisições. Na aba authorization selecione TYPE (BEARER) , e no token coloque o token que esta no arquivo .env .

Na aba headers key "authorization" com value Bearer "Token", outro parametro é, key "Content-Type" com value "application/json".

Na aba body, aqui é digitado a mensagem para o bot , onde o mesmo lhe manda uma response, e tem a certeza que esta na rota certa .

## 📦 Integração com llama2

A integração desta API com o llama2 é feita atraves de um endpoint enviado, com os parametros de headers corretos (content-type e token), também usa-se parametros que foi encontrado na documentação swagger, onde ali encontra-se todos os parametros de requisição para uma rota post, que envia essa requisição para o llama2, e recebe um response esperado, em formato JSON.

## 🛠️ Construído com

Api criada através de Node.js

- [Node.js](https://nodejs.org/docs/latest/api/) - O framework web usado
- [Express.js](https://expressjs.com/en/starter/installing.html) - Lib node.js usada para manipular as rotas de forma mais simples e rápida.
- [Axios](https://axios-http.com/docs/intro) - Faz a comunicação e consumo dos dados
- [Postman](https://learning.postman.com/docs/introduction/overview/) - Usado para testes de rotas

## ✒️ Autores

Desafio realizado por :

- **João Luiz** - _Trabalho Inicial_ - [Desenvolvedor](https://github.com/JoaoLuiz92)

## 📄 Licença

Este projeto está sob a licença (MIT) - veja o arquivo [LICENSE.md](https://github.com/JoaoLuiz92/chatbot/blob/main/LICENSE) para detalhes.

## 🎁 Expressões de gratidão

- Projeto de API Rest, feito para um teste técnico, onde tive bons e varios desafios,
  e a oportunidade de aprender uma nova integração de API com um tipo de AI, e a experiencia de um chatbot, e me aperfeiçoar ainda mais na área de backend 📢;

- Agradeço a Deus por essa oportunidade e tambem a empresa RiverData por esta oportunidade, e suporte no teste realizado 🫂;
