function anotarRecado(event) {
    event.preventDefault(); // impede o recarregamento da página ao enviar o formulário10

    const input = document.getElementById("campoInput");
    const lista = document.getElementById("listaDeMensagens");

    if (input.value.trim() !== "") {
        // Cria a div da nova tarefa
        const novaMensagem = document.createElement("div");
        novaMensagem.classList.add("mensagem-item");

        // Cria o span com o texto
        const texto = document.createElement("span");
        texto.textContent = input.value;

        // Cria o botão de fechar (X)
        const botaoFechar = document.createElement("span");
        botaoFechar.textContent = "×";
        botaoFechar.classList.add("botao-fechar");
        botaoFechar.onclick = function () {
            novaMensagem.remove();
        };

        // Junta tudo
        novaMensagem.appendChild(texto);
        novaMensagem.appendChild(botaoFechar);
        lista.appendChild(novaMensagem);

        // Limpa o input
        input.value = "";
    } else {
        alert("Por favor, insira uma tarefa.");
        
    }
}
