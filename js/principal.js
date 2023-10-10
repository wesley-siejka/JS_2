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
    }
    
    if (altura <= 0 || altura >= 3.5){
        console.log("Pessoa invalida");
        pessoa_valida = false
        tdImc.textContent = "Pessoa invalida"
    }
    
    if (pessoa_valida){
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2); 
    }
}

