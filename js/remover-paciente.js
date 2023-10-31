let pac1entes = document.querySelectorAll(".paciente");
 
let tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    },1000);
});

// pac1entes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         console.log("Jorges");
//         this.remove();
//     });
// });