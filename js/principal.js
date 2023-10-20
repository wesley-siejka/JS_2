let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

let pacientes = document.querySelectorAll(".paciente");

for(let i = 0; i <pacientes.length ; i++){

    let paciente = pacientes[i];

    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;
    
    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;
    
    let tdImc = paciente.querySelector(".info-imc");
    
    
    let pessoa_valida = true
    
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
        let imc = calcImc(peso,altura)
        tdImc.textContent = imc; 
    }
}

function calcImc(peso,altura){
    let imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}