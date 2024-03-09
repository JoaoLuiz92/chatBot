
const express = require('express');
const axios = require('axios');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

const LLAMA_ENDPOINT = 'https://rivia-rthzn.brazilsouth.inference.ml.azure.com/score';
const LLAMA_KEY = '4CUdm3xRF52khe94GYJSOKZcP83z0TAf';


app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.message;

  try {
    // Integração com LLAMA 2
    const llamaResponse = await axios.post( { message: userMessage }, {
      headers: {'Content-Type':'application/json', 'Authorization': `Bearer ${LLAMA_KEY}` },
    })
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
    if (userMessage && userMessage.includes('negócios')) {
      chatResponse = `Em relação a negócios, ${chatResponse}`;
    } else if (userMessage && userMessage.includes('tecnologia')) {
      chatResponse = `Sobre tecnologia, ${chatResponse}`;
    }
  
    return chatResponse;
  } 

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});





