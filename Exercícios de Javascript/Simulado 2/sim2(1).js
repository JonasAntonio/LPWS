var rodada = 1;
var placarJogador = 0;
var placarComputador = 0;

document.escolherJogada.addEventListener("submit", jog);
function jog(evento){
	evento.preventDefault();
	var jogadaJogador = document.escolherJogada.value;
	var jogadaComputador = Math.floor(Math.random()*3+1);
	var resultadoLinha;
	var resultadoCelula;
	var imprimirJ;
	var imprimirC;

	if(jogadaJogador == 1){
		imprimirJ = "Pedra";
		if(jogadaComputador == 1) {
			imprimirC = "Pedra";
		}else if(jogadaComputador == 2){
			imprimirC = "Papel";
			placarComputador++;
		}else{
			imprimirC = "Tesoura";
			placarJogador++;
		}
	}
	else if(jogadaJogador == 2){
		imprimirJ = "Papel";
		if(jogadaComputador == 1) {
			imprimirC = "Pedra";
			placarJogador++;
		}else if(jogadaComputador == 2){
			imprimirC = "Papel";
		}else{
			imprimirC = "Tesoura";
			placarComputador++;
		}
	}
	else if(jogadaJogador == 3){
		imprimirJ = "Tesoura";
		if(jogadaComputador == 1) {
			imprimirC = "Pedra";
			placarComputador++;
		}else if(jogadaComputador == 2){
			imprimirC = "Papel";
			placarJogador++;
		}else{
			imprimirC = "Tesoura";
		}
	}
	if(rodada = 10){
		return;
	}
	resultadoLinha = document.createElement("tr");
	resultadoLinha = setAttribute("id", "lin"+rodada);
	document.getElementById("tabela").appendChild(resultadoLinha);

	resultadoCelula = document.createElement("td");
	resultadoCelula.innerText = rodada;
	document.getElementById("lin"+rodada).appendChild(resultadoCelula);

	resultadoCelula = document.createElement("td");
	resultadoCelula.innerText = placarJogador;
	document.getElementById("lin"+rodada).appendChild(resultadoCelula);

	resultadoCelula = document.createElement("td");
	resultadoCelula.innerText = placarComputador;
	document.getElementById("lin"+rodada).appendChild(resultadoCelula);

	document.getElementById("placarJogador").innerText = placarJogador;
	document.getElementById("placarComputador").innerText = placarComputador;

	rodada++;

	if(placarJogador >= 5){
		document.getElementById("placarJogador").innerText = "Vencedor";
	}else if(placarComputador >= 5){
		document.getElementById("placarComputador").innerText = "Vencedor";
	}
}