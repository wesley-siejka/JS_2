let botaoAdd = document.querySelector("#adicionar-paciente");
botaoAdd.addEventListener("click", function(event){
    event.preventDefault();
  let form = document.querySelector("#formAdd");
  //adicionando paciente
  let paciente = obterForm(form);

  //cria a tr e td do paciente
 let pacienteTr = criaTr(paciente);

  //validando dados
  let erros = validaForm(paciente)

  if (erros.length > 0){
    exibeErro(erros);

    return;
  }

  //adicionando paciente a tabela
  let tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

  form.reset();
  let mesagenErro = document.querySelector("#error");
  mesagenErro.innerHTML = ""
});

function exibeErro(erros){
  let ul = document.querySelector("#error");
  ul.innerHTML = ""

  erros.forEach(function(erro){
    let li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li)
  });
}

function  obterForm(form){
  let paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calcImc(form.peso.value, form.altura.value)
  }
  return paciente
}

function criaTr(paciente){
  let pacienteTr=document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(criaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(criaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(criaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(criaTd(paciente.imc, "info-imc"));

  return pacienteTr
}

function criaTd(dado,classe){
  let td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  
  return td
}

function validaForm(paciente){
  let erros = [];

  if (paciente.nome.length == 0){
    erros.push("O nome não pode ser em branco")
  }

  if (!validaPeso(paciente.peso)) {
      erros.push("Peso é inválido");
  }

  if (!validaAltura(paciente.altura)) {
    erros.push("Altura é inválida");
  }
  
  if (paciente.peso.length == 0){
    erros.push("O peso não pode ser em branco")
  }

  if (paciente.altura.length == 0){
    erros.push("A altura não pode ser em branco")
  }

  if (paciente.gordura.length == 0){
    erros.push("A gordura não pode ser em branco")
  }

  return erros;
}
