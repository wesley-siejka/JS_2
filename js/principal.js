var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i <pacientes.length ; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    
    var pessoa_valida = true
    
    if (peso <= 0 || peso >= 400){
        console.log("Pessoa invalida");
        pessoa_valida = false
        tdImc.textContent = "Pessoa invalida"
        paciente.classList.add("pessoa-invalida")
    }
    
    if (altura <= 0 || altura >= 3.5){
        console.log("Pessoa invalida");
        pessoa_valida = false
        tdImc.textContent = "Pessoa invalida"
        paciente.classList.add("pessoa-invalida")
    }
    
    if (pessoa_valida){
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2); 
    }
}

let botaoAdd = document.querySelector("#adicionar-paciente");
botaoAdd.addEventListener("click", function(event){
    event.preventDefault();
  let form = document.querySelector("#formAdd");

  let nome = form.nome.value;
  let peso = form.peso.value;
  let altura = form.altura.value;
  let gordura  = form.gordura .value;

  let pacienteTr=document.createElement("tr");
  
  let nomeTd=document.createElement("tr");
  let pesoTd=document.createElement("tr");
  let alturaTd=document.createElement("tr");
  let gorduraTd=document.createElement("tr");
  let imcTd=document.createElement("tr");

  nomeTd.textContent = nome
  pesoTd.textContent = peso
  alturaTd.textContent = altura
  gorduraTd.textContent = gordura
});