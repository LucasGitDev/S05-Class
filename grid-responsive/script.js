document.addEventListener("DOMContentLoaded", function () {
    const welcomeMessage = document.getElementById("welcome-message");
        welcomeMessage.style.display = "block";

        // Adiciona um evento para fechar a mensagem
        const closeButton = document.getElementById("close-welcome");
        closeButton.addEventListener("click", function () {
            welcomeMessage.style.display = "none";
        });
});