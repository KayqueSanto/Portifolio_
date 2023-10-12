/*// Verifique se a página atual é "projetos.html" antes de exibir o overlay e o alerta
if (window.location.pathname.endsWith("/Projetos.html")) {
  // Exibe o overlay
  document.getElementById("overlay").style.display = "block";

  // Use setTimeout para mostrar o alerta após um atraso de 1 segundo (1000 milissegundos)
  setTimeout(function() {
      alert("Bem-vindo aos meus projetos, meu nobre!!");
      
      // Após o usuário pressionar "OK", esconda o overlay
      document.getElementById("overlay").style.display = "none";

      // Exibe o conteúdo
      document.getElementById("conteudo").style.display = "block";
  }, 1000);
}
*/
let menu = false
document.getElementById("menuBtn").addEventListener("click", function () {
  if (menu == false){
    document.getElementById("mySidenav").style.width = "240px";
    menu = true

  } else if (menu == true) {
    document.getElementById("mySidenav").style.width = "0";
    menu = false
  }

});

// mensagem quando a aba projetos for clicado
document.getElementById('projeto-link').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    const mensagem = "Em Breve... Página está em construção🚧🚧";
    alert(mensagem);
});