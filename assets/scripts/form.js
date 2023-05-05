const form = document.querySelector("#get-ticket-form");

form.addEventListener("submit", (e) => {
   e.preventDefault();
   
   var nome = e.target.elements["nome"].value;
   var tipo = e.target.elements["tipo"].value;

   const cadastro = {
      "nome": nome,
      "tipo": tipo,
   }

   localStorage.setItem("cadastro", JSON.stringify(cadastro));
   
   window.location.href = "seu-ingresso.html";
});