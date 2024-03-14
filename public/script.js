function sendMessage() {
  const userInput = document.getElementById("user-input");
  const userMessage = userInput.value.trim();

  if (userMessage !== "") {
    appendMessage("Você", userMessage);
    userInput.value = "";

    axios
      .post("/", { message: userMessage })
      .then((response) => {
        // Manipular a resposta do servidor aqui
        const llamaResponse = response.data.llamaData;
        appendMessage("Chatbot", llamaResponse);
      })
      .catch((error) => console.error("Erro ao processar a resposta:", error));
  }
}

function appendMessage(sender, message) {
  const chatBox = document.getElementById("chat-box");
  let formattedMessage = message;

  if (typeof message === "object") {
    formattedMessage = JSON.stringify(message, null, 2);
  }

  chatBox.innerHTML += `<div class="${sender.toLowerCase()}-message">${sender}: ${formattedMessage}</div>`;
}
