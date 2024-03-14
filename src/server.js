
const express = require('express');
const axios = require('axios');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');

const requestBody = require('./params.js')
const swaggerDocument = require ('./swaggerDoc.js')


require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.json());

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.post('/', async (req, res) => {
    const userMessage = req.body.message;
  
    try {
      // Fazer a chamada ao serviço Llama2 usando os dados da requisição e as variáveis de ambiente
      const llamaResponse = await axios.post(process.env.LLAMA_ENDPOINT, requestBody, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.LLAMA_KEY}`,
        },
      });
  
      // Extrair a resposta do LLAMA
      const llamaData = llamaResponse.data;
  
      // Enviar a resposta do Llama2 de volta ao cliente
      res.status(200).json({ llamaData });
    } catch (error) {
      console.error('Erro na chamada do serviço Llama2:', error.message);
      res.status(500).json({ message: 'Erro no servidor' });
    }
  });


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});





