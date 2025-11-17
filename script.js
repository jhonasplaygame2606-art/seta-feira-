// Selecionar elementos
const chatBox = document.getElementById("chat");
const sendBtn = document.getElementById("sendBtn");
const input = document.getElementById("inputMsg");

// Função para adicionar mensagens ao chat
function addMessage(sender, text) {
    const div = document.createElement("div");
    div.className = sender;
    div.textContent = text;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Função principal de envio
function sendMessage() {
    const message = input.value.trim();
    if (message === "") return;

    // Mostra mensagem do usuário
    addMessage("user", "Você: " + message);

    // Limpa campo
    input.value = "";

    // Resposta temporária da IA
    addMessage("bot", "Sexta-Feira: Estou online! (IA real chegando em breve 🤖)");
}

// Enviar clicando no botão
sendBtn.onclick = sendMessage;

// Enviar apertando ENTER
input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});
