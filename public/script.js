
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
  
      // Enviar mensagem para o back-end usando axios.post
      axios.post('/api/chat', { message: userMessage })
        .then(response => {
          // Manipular a resposta do servidor aqui
          appendMessage('Chatbot', response.data.message);
        })
        .catch(error => console.error('Erro ao processar a resposta:', error));
    }
  }
  