# ChatBot Api_LLM
    Sistema de interação com um OpenIA, e desenvolvido um ChatBot, lhe dando respostas iterativas, que são pré-dispostas por esses sistema chamado LLAMA2,visando uma experiencia nova, e magica com o cliente.


### 📋 Pré-requisitos

Para rodar a API precisa tais softwares instalados em sua maquida :
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

Aba headers key "authorization" com value Bearer "Token", outro parametro é, key "Content-Type" com value "application/json".

Aba body,  aqui é digitado a mensagem para o bot , onde o mesmo lhe manda uma response, e tem a certeza que esta na rota certa .


## 📦 Dificuldades

 - usei provedor oat, nao consguindo implementar totalmente o jwt.
 - não tive sucesso na conclusão do soft delete

## 🛠️ Construído com

Projeto criado através de node.js (Adonis.js)

* [Node.js](https://nodejs.org/docs/latest/api/) - O framework web usado
* [Adonis.js](https://docs.adonisjs.com/guides/introduction) - Lib de Node.js usado
* [Workbench](https://dev.mysql.com/doc/) - Software do banco de dados
* [Postman](https://learning.postman.com/docs/introduction/overview/) - Usado para testes de rotas

## ✒️ Autores

Desafio realizado por :

* **João Luiz** - *Trabalho Inicial* - [Desenvolvedor](https://github.com/JoaoLuiz92)

## 📄 Licença

Este projeto está sob a licença (MIT) - veja o arquivo [LICENSE.md](https://github.com/JoaoLuiz92/bechallenge/blob/main/LICENSE) para detalhes.

## 🎁 Expressões de gratidão

* Projeto de API Rest, feito para um teste tecnico, onde tive bons e varios desafios, 
e a oportunidade de aprender uma nova integração de API com um tipo de AI, e a experiencia de um chatbot, e me aperfeiçoar ainda mais na area de backend 📢;

* Agradeço a Deus por essa oportunidade e tambem a empresa RiverData por esta oportunidade, e suporte no teste realizado 🫂;

