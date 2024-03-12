
const express = require('express');
const axios = require('axios');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.json());

const LLAMA_ENDPOINT = 'https://rivia-rthzn.brazilsouth.inference.ml.azure.com/score';
const LLAMA_KEY = '4CUdm3xRF52khe94GYJSOKZcP83z0TAf';
const swaggerEndpoint = 'https://rivia-rthzn.brazilsouth.inference.ml.azure.com/swagger.json';




const swaggerDocument = {
  "openapi": "3.1.0",
  "info": {
      "title": "AzureML Foundation Model Inference Server",
      "summary": "A server for inferencing AzureML Foundation Models.",
      "version": "1.0.0"
  },
  "paths": {
      "/health": {
          "get": {
              "summary": "Endpoint to test the health of the server.",
              "responses": {
                  "200": {
                      "content": {
                          "application/json": {
                              "examples": {
                                  "example": {
                                      "value": {
                                          "healthy": ""
                                      }
                                  }
                              }
                          }
                      }
                  }
              }
          }
      },
      "/v1/chat/completion": {
          "post": {
              "summary": "Endpoint in the style of the OpenAI /v1/chat/completion endpoint.",
              "requestBody": {
                  "content": {
                      "application/json": {
                          "examples": {
                              "example": {
                                  "value": {
                                      "model": "gpt-3.5-turbo",
                                      "messages": [
                                          {
                                              "role": "system",
                                              "content": "You are a helpful assistant."
                                          },
                                          {
                                              "role": "user",
                                              "content": "Hello!"
                                          }
                                      ]
                                  }
                              }
                          }
                      }
                  }
              },
              "responses": {
                  "200": {
                      "content": {
                          "application/json": {
                              "examples": {
                                  "example": {
                                      "value": {
                                          "id": "chatcmpl-123",
                                          "object": "chat.completion",
                                          "created": 1677652288,
                                          "model": "gpt-3.5-turbo-0613",
                                          "choices": [
                                              {
                                                  "index": 0,
                                                  "message": {
                                                      "role": "assistant",
                                                      "content": "\n\nHello there, how may I assist you today?"
                                                  },
                                                  "finish_reason": "stop"
                                              }
                                          ],
                                          "usage": {
                                              "prompt_tokens": 9,
                                              "completion_tokens": 12,
                                              "total_tokens": 21
                                          }
                                      }
                                  }
                              }
                          }
                      }
                  }
              }
          }
      },
      "/v1/completion": {
          "post": {
              "summary": "Endpoint in the style of the OpenAI /v1/completion endpoint.",
              "requestBody": {
                  "content": {
                      "application/json": {
                          "examples": {
                              "example": {
                                  "value": {
                                      "model": "gpt-3.5-turbo-instruct",
                                      "prompt": "Say this is a test",
                                      "max_tokens": 7,
                                      "temperature": 0
                                  }
                              }
                          }
                      }
                  }
              },
              "responses": {
                  "200": {
                      "content": {
                          "application/json": {
                              "examples": {
                                  "example": {
                                      "value": {
                                          "id": "cmpl-uqkvlQyYK7bGYrRHQ0eXlWi7",
                                          "object": "text_completion",
                                          "created": 1589478378,
                                          "model": "gpt-3.5-turbo",
                                          "choices": [
                                              {
                                                  "text": "\n\nThis is indeed a test",
                                                  "index": 0,
                                                  "logprobs": null,
                                                  "finish_reason": "length"
                                              }
                                          ],
                                          "usage": {
                                              "prompt_tokens": 5,
                                              "completion_tokens": 7,
                                              "total_tokens": 12
                                          }
                                      }
                                  }
                              }
                          }
                      }
                  }
              }
          }
      },
      "/score": {
          "post": {
              "summary": "The Azure ML standard inference input. This path is used by the AzureML UI.",
              "requestBody": {
                  "content": {
                      "application/json": {
                          "examples": {
                              "example": {
                                  "value": {
                                      "input_data": {
                                          "input_string": [
                                              {
                                                  "role": "user",
                                                  "content": "I am going to Paris, what should I see?"
                                              },
                                              {
                                                  "role": "assistant",
                                                  "content": "Paris, the capital of France, is known for its stunning architecture, art museums, historical landmarks, and romantic atmosphere. Here are some of the top attractions to see in Paris:\n\n1. The Eiffel Tower: The iconic Eiffel Tower is one of the most recognizable landmarks in the world and offers breathtaking views of the city.\n2. The Louvre Museum: The Louvre is one of the world's largest and most famous museums, housing an impressive collection of art and artifacts, including the Mona Lisa.\n3. Notre-Dame Cathedral: This beautiful cathedral is one of the most famous landmarks in Paris and is known for its Gothic architecture and stunning stained glass windows.\n\nThese are just a few of the many attractions that Paris has to offer. With so much to see and do, it's no wonder that Paris is one of the most popular tourist destinations in the world."
                                              },
                                              {
                                                  "role": "user",
                                                  "content": "What is so great about #1?"
                                              }
                                          ],
                                          "parameters": {
                                              "temperature": 0.6,
                                              "top_p": 0.9,
                                              "do_sample": true,
                                              "max_new_tokens": 200
                                          }
                                      }
                                  }
                              }
                          }
                      }
                  }
              },
              "responses": {
                  "200": {
                      "content": {
                          "application/json": {
                              "examples": {
                                  "example": {
                                      "value": {
                                          "output": "The Eiffel Tower is considered one of the greatest engineering feats of the 19th century and is an iconic symbol of Paris and France. Here are some reasons why its so great:\n\n1. Unique Design: The Eiffel Towers unique design, with its lattice-like structure and iron beams, makes it a striking and recognizable landmark.\n2. Breathtaking Views: The Eiffel Tower offers panoramic views of the city of Paris and its surroundings, making it a popular spot for tourists and locals alike.\n3. Historical Significance: The Eiffel Tower was built for the 1889 Worlds Fair and was initially intended to be a temporary structure. However, it has become a permanent fixture in Paris and a symbol of French culture and engineering.\n4. Romantic Atmosphere: The Eiffel Tower is"
                                      }
                                  }
                              }
                          }
                      }
                  }
              }
          }
      }
  }
}

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/health', (req, res) => {
  res.status(200).json({ healthy: '' });
});

app.post('/v1/chat/completion', async (req, res) => {
  const requestBody = {
    "model": "gpt-3.5-turbo",
    "messages": [
    {
      "role": "system",
      "content": "You are a helpful assistant."
    },
    {
      "role": "user",
      "content": "Hello!"
    },

    {
      "model": "gpt-3.5-turbo-instruct",
      "prompt": "Say this is a test",
      "max_tokens": 7,
      "temperature": 0
    },

    {
      "input_data": {
        "input_string": [
          {
            "role": "user",
            "content": "I am going to Paris, what should I see?"
          },
          {
            "role": "assistant",
            "content": "Paris, the capital of France, is known for its stunning architecture, art museums, historical landmarks, and romantic atmosphere. Here are some of the top attractions to see in Paris:\n\n1. The Eiffel Tower: The iconic Eiffel Tower is one of the most recognizable landmarks in the world and offers breathtaking views of the city.\n2. The Louvre Museum: The Louvre is one of the world's largest and most famous museums, housing an impressive collection of art and artifacts, including the Mona Lisa.\n3. Notre-Dame Cathedral: This beautiful cathedral is one of the most famous landmarks in Paris and is known for its Gothic architecture and stunning stained glass windows.\n\nThese are just a few of the many attractions that Paris has to offer. With so much to see and do, it's no wonder that Paris is one of the most popular tourist destinations in the world."
          },
          {
            "role": "user",
            "content": "What is so great about #1?"
          }
        ],
        "parameters": {
          "temperature": 0.6,
          "top_p": 0.9,
          "do_sample": true,
          "max_new_tokens": 200
        }
      }
    }
  ]
  }
  
 

  const llamaResponse = await axios.post(LLAMA_ENDPOINT,requestBody,{
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${LLAMA_KEY}`
    },

  });
  try {
    const processedResponse = llamaResponse.data;
    

  res.status(200).json(
    (processedResponse),
    {
    id: 'chatcmpl-123',
    object: 'chat.completion',
    created: 1677652288,
    model: 'gpt-3.5-turbo-0613',
    choices: [
      {
        index: 0,
        message: {
          role: 'assistant',
          content: '\n\nHello there, how may I assist you today?',
        },
        finish_reason: 'stop',
      },
    ],
    usage: {
      prompt_tokens: 9,
      completion_tokens: 12,
      total_tokens: 21,
    },
    

    
    });
  
    
  } catch (error) {
    console.error('Erro na chamada do Llama2:', error.message);
    res.status(500).json({ message: 'Erro no servidor' });
  }// Lógica para processar a resposta do Llama2
  
});



/*app.post('/api/chat', async (req, res) => {
  const requestBody = req.body.message;

  try {
    const llamaResponse = await axios.post(LLAMA_ENDPOINT, requestBody,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LLAMA_KEY}`
      },

    });

      const processedResponse = processLlamaResponse(llamaResponse.data);

    res.json({ output: processedResponse });
  } catch (error) {
    console.error('Erro na chamada do Llama2:', error.message);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

// Função para processar a resposta do Llama2
function processLlamaResponse(llamaResponse) {
  // Adicione sua lógica aqui conforme necessário
  return llamaResponse.output;
}*/

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});





