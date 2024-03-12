// script.js

function sendMessage() {
  const userInput = document.getElementById('user-input');
  const requestBody = requestBody.value.trim();
  
  if (requestBody !== '') {
    appendMessage('Você', requestBody);
    userInput.value = '';

    // Enviar mensagem para o back-end usando axios.post
    axios.post('/api/chat', { message: requestBody })
      .then(response => {
        // Manipular a resposta do servidor aqui
        appendMessage('Chatbot', response.data.message);
      })
      .catch(error => console.error('Erro ao processar a resposta:', error));
  }
}

function appendMessage(sender, message) {
  // Add your logic to append messages to the chat box
  const chatBox = document.getElementById('chat-box');
  chatBox.innerHTML += `<div class="${sender.toLowerCase()}-message">${sender}: ${message}</div>`;
}
