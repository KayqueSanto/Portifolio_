document.addEventListener("DOMContentLoaded", function() {
    var popups = document.querySelectorAll(".popup");
    var buttons = document.querySelectorAll(".popup-button");

    function mostrarPopup(index) {
        if (index >= 0 && index < popups.length) {
            // Oculta todos os popups antes de mostrar o desejado
            popups.forEach(function (popup, i) {
                if (i === index) {
                    popup.style.display = "block";
                } else {
                    popup.style.display = "none";
                }
            });

            // Oculta todos os botões de popup
            buttons.forEach(function (button) {
                button.style.display = "none";
            });
        }
    }

    function fecharPopup(index) {
        if (index >= 0 && index < popups.length) {
            // Oculta o popup correspondente
            popups[index].style.display = "none";

            // Exibe todos os botões de popup novamente
            buttons.forEach(function (button) {
                button.style.display = "inline-block";
            });
        }
    }

    // Adiciona eventos de clique aos botões
    buttons.forEach(function (button, index) {
        button.addEventListener("click", function () {
            mostrarPopup(index);
        });
    });

    // Adiciona eventos de clique aos botões de fechar
    var closeButtons = document.querySelectorAll(".popup button");
    closeButtons.forEach(function (closeButton, index) {
        closeButton.addEventListener("click", function () {
            fecharPopup(index);
        });
    });
});
