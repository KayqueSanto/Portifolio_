document.getElementById("menuBtn").addEventListener("click", function () {
    document.getElementById("mySidenav").style.width = "240px";
});

document.getElementById("closeBtn").addEventListener("click", function () {
    document.getElementById("mySidenav").style.width = "0";
});

  // mensagem quando o link for clicado
  document.getElementById('projeto-link').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    const mensagem = "Em Breve... Página está em construção🚧🚧";
    alert(mensagem);
  });