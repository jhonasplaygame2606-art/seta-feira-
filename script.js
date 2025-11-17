// Selecionar elementos
const chatBox = document.getElementById("chat");
const sendBtn = document.getElementById("sendBtn");
const input = document.getElementById("inputMsg");

// Função para adicionar mensagem no chat
function addMessage(sender, text) {
    const div = document.createElement("div");
    div.className = sender;
    div.textContent = text;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Quando clicar no botão Enviar
sendBtn.onclick = () => {
    const message = input.value.trim();
    if (message === "") return;

    // mostra a mensagem do usuário
    addMessage("user", "Você: " + message);

    input.value = "";

    // Resposta simples da IA por enquanto (teste)
    addMessage("bot", "Sexta-Feira: Estou online! Em breve terei respostas reais com IA 😉");
};
