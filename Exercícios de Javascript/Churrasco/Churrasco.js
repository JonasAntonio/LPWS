//JavaScript Churrasco

var sexo = document.churrasco.selecionarSexo;
var nome = document.churrasco.digitarNome;
var tableMasc = document.getElementById("tableMasc");
var tableFem = document.getElementById("tableFem");

document.churrasco.addEventListener("submit", enviar);
function enviar(evento){
	evento.preventDefault();
	if(sexo.value == "1"){
		var criaTrM = document.createElement("tr");
		var criaTdM = document.createElement("td");
		criaTdM.innerText = nome.value;
		criaTrM.appendChild(criaTdM);
		tableMasc.appendChild(criaTrM);

	}else if(sexo.value == "2"){
		var criaTrF = document.createElement("tr");
		var criaTdF = document.createElement("td");
		criaTdF.innerText = nome.value;
		criaTrF.appendChild(criaTdF);
		tableFem.appendChild(criaTrF);
	}
	document.churrasco.reset();

}