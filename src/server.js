const express = require('express');
const axios = require('axios');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

// Configuração do Swagger
const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: 'API LLM',
        version: '1.0.0',
        description: 'API para interação com o serviço LLAMA 2',
      },
    },
    apis: [__filename], // Caminho para os arquivos que contêm as definições Swagger
  };

const LLAMA_ENDPOINT = 'https://rivia-iwcro.brazilsouth.inference.ml.azure.com/score';
const LLAMA_KEY = '57gc82icj3hia1r1KqXPZMxL16XY5bFO';

const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Rota para a documentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /api/chat:
 *   post:
 *     summary: Endpoint para interação com o serviço LLAMA 2
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *     responses:
 *       200:
 *         description: Resposta bem-sucedida
 *       500:
 *         description: Erro no servidor
 */

app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.message;

  try {
    // Integração com LLAMA 2
    const llamaResponse = await axios.post(LLAMA_ENDPOINT, { message: userMessage }, {
      headers: { 'Authorization': `Bearer ${LLAMA_KEY}` }
    });
    console.log('Resposta do LLAMA 2:', llamaResponse.data);

    // Lógica para processar a resposta do LLAMA 2 e adicionar contexto se aplicável
    const chatResponse = processLLAMAResponse(llamaResponse.data);

    res.json({ message: chatResponse });
  } catch (error) {
    console.error('Erro na chamada do LLAMA 2:', error.message);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

function processLLAMAResponse(llamaResponse, userMessage) {
    // Lógica para processar a resposta do LLAMA 2
    let chatResponse = llamaResponse;
  
    // Adicione um contexto específico com base na mensagem do usuário
    if (userMessage.includes('negócios')) {
      chatResponse = `Em relação a negócios, ${chatResponse}`;
    } else if (userMessage.includes('tecnologia')) {
      chatResponse = `Sobre tecnologia, ${chatResponse}`;
    }
  
    return chatResponse;
  } 

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
