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

let botaoAdd = querySelector("#adicionar-paciente");
botaoAdd.addEventListener("click", function(event){
    event.preventDefault();
    let form = document.querySelector("formAdd")
    
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
});