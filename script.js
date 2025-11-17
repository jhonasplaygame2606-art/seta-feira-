// Função de fala
function falar(texto) {
    const synth = window.speechSynthesis;
    const utter = new SpeechSynthesisUtterance(texto);
    utter.lang = "pt-BR";
    synth.speak(utter);
}

// Respostas básicas da Sexta-feira
function responder() {
    const entrada = document.getElementById("input").value.toLowerCase();

    if (entrada.includes("oi") || entrada.includes("ola")) {
        falar("Olá! Eu sou a Sexta-feira. Como posso ajudar?");
    }
    else if (entrada.includes("quem é você")) {
        falar("Eu sou a sua assistente virtual Sexta-feira.");
    }
    else if (entrada.includes("horas")) {
        const horas = new Date().toLocaleTimeString("pt-BR");
        falar("Agora são " + horas);
    }
    else {
        falar("Desculpe, ainda não aprendi a responder isso.");
    }
}
