const { default: axios } = require("axios");

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function appendMessage(sender, message) {
  const div = document.createElement('div');
  div.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(div);
}

function sendMessage() {
  const userMessage = userInput.value.trim();

  if (userMessage !== '') {
    appendMessage('Você', userMessage);
    userInput.value = '';

    // Enviar mensagem para o back-end
    axios('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMessage })
    })
      .then(response => response.json())
      .then(data => appendMessage('Chatbot', data.message))
      .catch(error => console.error('Erro ao processar a resposta:', error));
  }
}
