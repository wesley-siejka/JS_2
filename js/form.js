let botaoAdd = document.querySelector("#adicionar-paciente");
botaoAdd.addEventListener("click", function(event){
    event.preventDefault();
  let form = document.querySelector("#formAdd");

  let nome = form.nome.value;
  let peso = form.peso.value;
  let altura = form.altura.value;
  let gordura  = form.gordura .value;

  let pacienteTr=document.createElement("tr");
  pacienteTr.classList.add("paciente")
  
  let nomeTd=document.createElement("td");
  let pesoTd=document.createElement("td");
  let alturaTd=document.createElement("td");
  let gorduraTd=document.createElement("td");
  let imcTd=document.createElement("td");

  nomeTd.textContent = nome
  pesoTd.textContent = peso
  alturaTd.textContent = altura
  gorduraTd.textContent = gordura
  imcTd.textContent = calcImc(peso,altura)

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);

  let tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
});