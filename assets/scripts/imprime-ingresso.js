const dadosIngresso = JSON.parse(localStorage.getItem("cadastro"));
imprimeIngresso(dadosIngresso.nome, dadosIngresso.tipo);


function imprimeIngresso(nome, tipo) {
   const ingressoNome = document.querySelector(".ticket-card-name");
   ingressoNome.textContent = nome;

   const ingressoTipo = document.querySelector(".ticket-card-type");
   ingressoTipo.textContent = tipo;
}